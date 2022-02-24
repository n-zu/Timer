type timeStamp = number;

export interface Event {
  startTime: timeStamp;
  type: string;
  title: string;
  description?: string;
}

export interface Day {
  date: timeStamp;
  events: Event[];
}
