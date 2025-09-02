import { TriggerOn } from "./marker.props";
import { MarkerProps } from "./marker.props";
import { SubProps } from "./sub.props";
import {
  useRef,
  useEffect,
  ReactElement,
  isValidElement,
  cloneElement,
  Children,
} from "react";

const subs = new Set<SubProps>();
let listening = false;
let ticking = false;

function thresholdPx(vh: number, t: TriggerOn) {
  if (typeof t === "number") {
    const p = Math.max(0, Math.min(100, t));
    return (vh * p) / 100;
  }
  if (t === "top") return 0;
  if (t === "bottom") return vh;
  return vh / 2;
}

function schedule() {
  if (ticking || typeof window === "undefined") return;
  ticking = true;
  window.requestAnimationFrame(() => {
    ticking = false;
    const vh = window.innerHeight;
    subs.forEach((s) => {
      const el = s.getEl();
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const point = rect.top + rect.height / 2;
      const line = thresholdPx(vh, s.triggerOn);
      const delta = point - line;

      if (s.lastDelta !== null) {
        if (s.lastDelta > 0 && delta <= 0) s.onDown?.();
        else if (s.lastDelta <= 0 && delta > 0) s.onUp?.();
      }
      s.lastDelta = delta;
    });
  });
}

function ensureListeners() {
  if (listening || typeof window === "undefined") return;
  listening = true;
  window.addEventListener("scroll", schedule, { passive: true });
  window.addEventListener("resize", schedule);
  schedule();
}

function cleanupIfEmpty() {
  if (!listening || typeof window === "undefined") return;
  if (subs.size) return;
  window.removeEventListener("scroll", schedule);
  window.removeEventListener("resize", schedule);
  listening = false;
}

function setRef<T>(ref: React.Ref<T> | undefined, val: T) {
  if (!ref) return;
  if (typeof ref === "function") ref(val);
  else
    try {
      // @ts-ignore
      ref.current = val;
    } catch {}
}
function mergeRefs<T>(...refs: Array<React.Ref<T> | undefined>) {
  return (val: T) => refs.forEach((r) => setRef(r, val));
}

export const Marker: React.FC<MarkerProps> = ({
  id,
  triggerOn = "middle",
  onScrollPastDown,
  onScrollPastUp,
  children,
}) => {
  const localRef = useRef<HTMLElement | null>(null);
  const subRef = useRef<SubProps | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const sub: SubProps = {
      getEl: () => localRef.current,
      triggerOn,
      onDown: () => onScrollPastDown?.(id),
      onUp: () => onScrollPastUp?.(id),
      lastDelta: null,
    };
    subs.add(sub);
    subRef.current = sub;
    ensureListeners();
    schedule();

    return () => {
      if (subRef.current) subs.delete(subRef.current);
      subRef.current = null;
      cleanupIfEmpty();
    };
  }, [id, triggerOn, onScrollPastDown, onScrollPastUp]);

  if (!isValidElement(children)) return children as any;
  const onlyChild = Children.only(children) as ReactElement<any>;
  const existingRef = (onlyChild as any).ref as
    | React.Ref<HTMLElement>
    | undefined;

  return cloneElement(onlyChild, { ref: mergeRefs(existingRef, localRef) });
};

export default Marker;
