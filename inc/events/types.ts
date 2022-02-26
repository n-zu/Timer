export type wid = { id: number };

export type EventType = {
  type: string;
} & wid;

export type EventTypeData = EventType & {
  hue: number;
};

export type UntimedEvent = {
  type: number;
  title: string;
  description?: string;
};

export type Event = UntimedEvent & {
  startTime: number;
} & wid;
