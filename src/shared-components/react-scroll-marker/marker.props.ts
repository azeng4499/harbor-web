import { ReactElement } from "react";

export type TriggerOn = "top" | "middle" | "bottom" | number;

export type MarkerProps = {
  triggerOn?: TriggerOn;
  onScrollPastDown?: (id: string) => void;
  onScrollPastUp?: (id: string) => void;
  children: ReactElement;
  id: string;
};
