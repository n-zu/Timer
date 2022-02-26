import { EventTypeData, UntimedEvent } from "./types";

const eventTypes: EventTypeData[] = [
  {
    id: 0,
    type: "Unknown",
    hue: 0,
  },
  {
    id: 1,
    type: "Work",
    hue: 20,
  },
  {
    id: 2,
    type: "Study",
    hue: 40,
  },
  {
    id: 3,
    type: "Other",
    hue: 60,
  },
];

export const getEventTypes = (): EventTypeData[] => eventTypes;

export const getEventType = (id: number): EventTypeData => {
  return eventTypes.find((e) => e.id === id) || eventTypes[0];
};

const events: UntimedEvent[] = [
  {
    type: 0,
    title: "Unknown",
    description: "",
  },
  {
    type: 1,
    title: "Work",
    description: "Sirius: environment app",
  },
  {
    type: 1,
    title: "Work",
    description: "Sirius: automated defense",
  },
  {
    type: 2,
    title: "Study",
    description: "Labo",
  },
  {
    type: 2,
    title: "Study",
    description: "Web Development",
  },
  {
    type: 2,
    title: "Study",
    description: "Other",
  },
  {
    type: 3,
    title: "Other",
    description: "Sleep",
  },
  {
    type: 3,
    title: "Other",
    description: "Play",
  },
  {
    type: 3,
    title: "Other",
    description: "Read",
  },
  {
    type: 3,
    title: "Other",
    description: "Watch TV",
  },
];

export const getEvents = (): UntimedEvent[] => events;
