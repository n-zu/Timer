import { getTime, getDuration, _getDuration } from "../util/time";
import _ from "lodash";
import { Event, DisplayEvent } from "./types";

export const calculateDisplayEvents = (events: Event[]): DisplayEvent[] => {
  console.time();
  const displayEvents: DisplayEvent[] = [];
  for (let i = 0; i < events.length - 1; i++) {
    const event = events[i];
    const nextEvent = events[i + 1];
    const _endTime = nextEvent.startTime;
    displayEvents.push({
      ...event,
      startTime: getTime(event.startTime),
      endTime: getTime(_endTime),
      duration: getDuration(event.startTime, _endTime),
      _duration: _getDuration(event.startTime, _endTime) / 1000 / 60,
    });
  }
  const lastEvent = events[events?.length - 1];
  lastEvent &&
    displayEvents?.push({
      ...lastEvent,
      startTime: getTime(lastEvent?.startTime),
      endTime: null,
      duration: null,
      _duration: null,
    });
  console.timeEnd();
  return displayEvents;
};

type Data = {
  type: number;
  duration: number; // minutes
};

export const calculateStats = (events: DisplayEvent[]): Data[] => {
  const groupedData: {
    [type: string]: DisplayEvent[];
  } = _.groupBy(events, "type");

  const stats: Data[] = [];

  Object.keys(groupedData).forEach((k) => {
    const type = parseInt(k);
    const duration = groupedData[k].reduce((tot, ev) => tot + ev._duration, 0);
    stats.push({ type, duration });
  });

  return stats;
};
