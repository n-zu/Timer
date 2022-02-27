import { Dispatch, SetStateAction, useState } from "react";
import { getTimeStamp } from "../../util/time";

import CurrentTime from "./CurrentTime";
import CurrentEvent from "./CurrentEvent";
import SelectEvent from "./SelectEvent";

import { Event, UntimedEvent } from "../../events/types";
import styles from "./Timer.module.scss";

const Timer = () => {
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
  const [eventList, setEventList] = useState<Event[]>([]);
  const minEventDuration = 5000; // ms
  const addEvent = (event: Event) => {
    const lastStartTime = eventList.at(-1)?.startTime ?? 0;
    const duration = getTimeStamp() - lastStartTime;
    if (duration < minEventDuration) {
      setEventList((e) => [...e.slice(0, -1), event]);
    } else {
      setEventList((e) => [...e, event]);
    }
  };
  const logEvents = () => {
    console.table(eventList);
  };
  // ---------------------------------------------------------------------------

  const select = (event: UntimedEvent) => {
    const newEvent: Event = {
      id: eventList.length,
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

export default Timer;
