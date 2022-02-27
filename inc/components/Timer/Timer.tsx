import { Dispatch, SetStateAction, useState } from "react";
import { getTimeStamp } from "../../util/time";

import {
  connect,
  type ConnectedProps,
  type RootState,
  type AppDispatch,
} from "../../store/hooks";
import { addEvent, clearEvents } from "../../store/eventsSlice";

import CurrentTime from "./CurrentTime";
import CurrentEvent from "./CurrentEvent";
import SelectEvent from "./SelectEvent";

import type { Event, UntimedEvent } from "../../events/types";
import styles from "./Timer.module.scss";

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type TimerProps = PropsFromRedux & {};

const Timer = ({ events, addEvent, clearEvents }: TimerProps) => {
  const [event, setEvent]: [
    event: Event,
    setEvent: Dispatch<SetStateAction<Event>>
  ] = useState<Event>({
    id: 0,
    type: 0,
    title: "Initial event",
    startTime: getTimeStamp(),
  });

  // ---------------------------------------------------------------------------
  const logEvents = () => {
    console.table(events);
  };
  // ---------------------------------------------------------------------------

  const select = (event: UntimedEvent) => {
    const newEvent: Event = {
      id: events.length,
      ...event,
      startTime: getTimeStamp(),
    };
    addEvent(newEvent);
    setEvent(newEvent);
  };

  return (
    <section className={styles.container}>
      <div className={styles.current}>
        <CurrentTime />
        <CurrentEvent event={event} />
      </div>
      <div className={styles.selector}>
        <SelectEvent select={select} />
      </div>
      <div className={styles.selector}>
        <button onClick={logEvents}>Log events</button>
        <button onClick={clearEvents}>Clear events</button>
      </div>
    </section>
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

export default connector(Timer);
