import { Dispatch, SetStateAction, useState } from "react";
import { getTimeStamp } from "../../util/time";

import {
  connect,
  mapStateToPropsType,
  mapDispatchToPropsType,
} from "../../store/hooks";

import { addEvent } from "../../store/eventsSlice";

import CurrentTime from "./CurrentTime";
import CurrentEvent from "./CurrentEvent";
import SelectEvent from "./SelectEvent";

import type { Event, UntimedEvent } from "../../events/types";
import styles from "./Timer.module.scss";

type TimerProps = {
  events: Event[];
  addEvent: (event: Event) => void;
};

const Timer = ({ events, addEvent }: TimerProps) => {
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
      <div className={styles.selector} onClick={logEvents}>
        LOG EVENTS
      </div>
    </section>
  );
};

const mapStateToProps: mapStateToPropsType = (state) => ({
  events: state.events.events,
});

const mapDispatchToProps: mapDispatchToPropsType = (dispatch) => ({
  addEvent: (event) => dispatch(addEvent(event)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
