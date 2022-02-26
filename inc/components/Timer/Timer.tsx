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

  const select = (event: UntimedEvent) => {
    setEvent((e) => ({
      ...event,
      startTime: getTimeStamp(),
      id: e.id + 1,
    }));
  };

  return (
    <section className={styles.container}>
      <div className={styles.current}>
        <CurrentTime />
        <CurrentEvent event={event} />
      </div>
      <SelectEvent select={select} />
    </section>
  );
};

export default Timer;
