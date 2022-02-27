import { configureStore } from "@reduxjs/toolkit";
import eventsReducer, { _getInitialEvents, _saveEvents } from "./eventsSlice";

const store = configureStore({
  reducer: {
    events: eventsReducer,
  },
  preloadedState: {
    events: {
      events: _getInitialEvents(),
    },
  },
});

if (typeof window !== "undefined")
  window.onbeforeunload = () => {
    const events = store?.getState()?.events?.events ?? [];
    _saveEvents(events);
  };

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
