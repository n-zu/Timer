import { Event } from "../../util/types";

export enum EventType {
  Unknown = "Unknown",
  Work = "Work",
  Study = "Study",
  Play = "Play",
}

export const eventHues = {
  [EventType.Unknown]: 60,
  [EventType.Work]: 250,
  [EventType.Study]: 400,
  [EventType.Play]: 0,
};

export const events: Record<EventType, Event> = {
  [EventType.Unknown]: {
    type: EventType.Unknown,
    title: "Unknown",
    description: "",
    startTime: 0,
  },
  [EventType.Work]: {
    type: EventType.Work,
    title: "Work",
    description: "SIRIUS",
    startTime: 0,
  },
  [EventType.Study]: {
    type: EventType.Study,
    title: "Study",
    description: "Need to do LABO",
    startTime: 0,
  },
  [EventType.Play]: {
    type: EventType.Play,
    title: "Play",
    description: "",
    startTime: 0,
  },
};
