import { EventTypeData, UntimedEvent } from "./types";

// ---------- COLORS ----------
// <div className={styles.selector}><div className={styles.SelectEvent}>
//     {[...Array(37)].map((x, i) => (
//         <div key={i} className={styles.EventSelector} style={{ ["--hue" as any]: i * 10 }}
//           {i * 10}  </div>))}</div></div>;
enum hues {
  red = 0,
  orange = 20,
  yellow = 40,
  green = 80,
  blue = 210,
  purple = 250,
  pink = 320,
}

const eventTypes: EventTypeData[] = [
  {
    id: 0,
    type: "Unknown",
    hue: hues.yellow,
  },
  {
    id: 1,
    type: "Work",
    hue: hues.orange,
  },
  {
    id: 2,
    type: "Study",
    hue: hues.blue,
  },
  {
    id: 3,
    type: "Other",
    hue: hues.green,
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
    title: "env-app",
    description: "Work on Sirius: environment app",
  },
  {
    type: 1,
    title: "respond",
    description: "Work on Sirius: automated defense",
  },
  {
    type: 2,
    title: "Labo",
    description: "Study Laboratory for FIUBA",
  },
  {
    type: 2,
    title: "Web Dev",
    description:
      "Look into Web Development Technologies & Put them into practice.\nNext / WPA / WASM / Databases / etc.",
  },
  {
    type: 2,
    title: "Other",
    description: "Other Learning",
  },
  {
    type: 3,
    title: "Sleep",
  },
  {
    type: 3,
    title: "Play",
  },
  {
    type: 3,
    title: "Read",
    description: "Stormlight Archive / Web LN / etc.",
  },
  {
    type: 3,
    title: "Watch TV",
    description: "Anime / Critical Role",
  },
];

export const getEvents = (): UntimedEvent[] => events;
