import { useMemo } from "react";
import {
  connect,
  type ConnectedProps,
  type RootState,
  type AppDispatch,
} from "../../store/hooks";
import { getTime, getDuration, _getDuration } from "../../util/time";
import { addEvent, clearEvents } from "../../store/eventsSlice";

import EventBlock from "./EventBlock";
import Controls from "./Controls";

import { Event, DisplayEvent } from "../../events/types";
import styles from "./EventTimeline.module.scss";

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type EventTimelineProps = PropsFromRedux & {};

const calculateDisplayEvents = (events: Event[]): DisplayEvent[] => {
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

const EventTimeline = ({
  events,
  addEvent,
  clearEvents,
}: EventTimelineProps) => {
  // const { events, loading } = useEvents();
  const displayEvents = useMemo(() => calculateDisplayEvents(events), [events]);
  return (
    <div className={styles.EventTimeline}>
      <div className={styles.Events}>
        {displayEvents.map((e, i) => (
          <EventBlock key={i} event={e} />
        ))}
      </div>
      <Controls
        fullEvents={displayEvents}
        addEvent={addEvent}
        clearEvents={clearEvents}
      />
    </div>
  );
};

function mapStateToProps(state: RootState) {
  return {
    events: state.events.events,
  };
}

function mapDispatchToProps(dispatch: AppDispatch) {
  return {
    addEvent: (event: Event) => dispatch(addEvent(event)),
    clearEvents: () => dispatch(clearEvents()),
  };
}

export default connector(EventTimeline);
