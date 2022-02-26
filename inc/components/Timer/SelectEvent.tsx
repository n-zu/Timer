import { getTimeStamp } from "../../util/time";
import { getEvents } from "../../events/events";

import styles from "./Timer.module.scss";
import { Dispatch, SetStateAction } from "react";
import { UntimedEvent } from "../../events/types";

const EventSelector = ({ event, select }) => {
  return (
    <div
      className={styles.EventSelector}
      onClick={select}
      title={event.description}
    >
      {event.title}
    </div>
  );
};

type SelectEventProps = {
  select: (event: UntimedEvent) => void;
};

const SelectEvent = ({ select }: SelectEventProps) => {
  const events = getEvents();

  return (
    <div className={styles.SelectEvent}>
      {events.map((event, i) => (
        <EventSelector key={i} event={event} select={() => select(event)} />
      ))}
    </div>
  );
};

export default SelectEvent;
