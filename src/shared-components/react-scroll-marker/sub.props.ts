import { TriggerOn } from "./marker.props";

export type SubProps = {
  getEl: () => HTMLElement | null;
  triggerOn: TriggerOn;
  onDown?: () => void;
  onUp?: () => void;
  lastDelta: number | null;
};
