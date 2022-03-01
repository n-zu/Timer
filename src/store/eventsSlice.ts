import { createSlice } from "@reduxjs/toolkit";
import type { Event } from "../events/types";
import { getTimeStamp } from "../util/time";

export const _getInitialEvents = (): Event[] => {
  try {
    const events = localStorage?.getItem("events");
    if (events) return JSON.parse(events);
    return [];
  } catch (e) {
    return [];
  }
};

export const _saveEvents = async (events: Event[]) => {
  try {
    localStorage.setItem("events", JSON.stringify(events));
  } catch (e) {
    return;
  }
};

const minEventDuration = 5000; // ms

export const eventsSlice = createSlice({
  name: "events",
  initialState: {
    events: [] as Event[],
  },
  reducers: {
    addEvent: (state, event) => {
      const lastStartTime = state.events?.at(-1)?.startTime ?? 0;
      const duration = getTimeStamp() - lastStartTime;

      if (duration < minEventDuration) {
        state.events.splice(-1, 1, event.payload);
      } else {
        state.events = [...state.events, event.payload];
      }
    },
    clearEvents: (state) => {
      state.events = [];
    },
  },
});

export const { addEvent, clearEvents } = eventsSlice.actions;

export default eventsSlice.reducer;
