import { useState } from "react";
import { getTimeStamp } from "../../util/time";

import CurrentTime from "./CurrentTime";
import CurrentEvent from "./CurrentEvent";
import SelectEvent from "./SelectEvent";

import { Event } from "../../util/types";
import styles from "./Timer.module.scss";

const Timer = () => {
  const [event, setEvent] = useState<Event>({
    startTime: getTimeStamp(),
    type: "Default",
    title: "Initial event",
  });

  return (
    <section className={styles.container}>
      <div className={styles.current}>
        <CurrentTime />
        <CurrentEvent event={event} />
      </div>
      <SelectEvent setEvent={setEvent} />
    </section>
  );
};

export default Timer;
