import _ from "lodash";
import { useMemo, useState } from "react";
import { getEvents, getEventType } from "../../events/events";

import type { UntimedEvent } from "../../events/types";
import styles from "./Timer.module.scss";

type EventSelectorProps = {
  type: number;
  events: UntimedEvent[];
  select: (event: UntimedEvent) => void;
};

const EventSelector = ({ type, events, select }: EventSelectorProps) => {
  const eventType = getEventType(type);
  const [current, setCurrent] = useState(0);

  const onClick = () => {
    select(events[current]);
    setCurrent((c) => (c + 1) % events.length);
  };
  return (
    <div
      onClick={onClick}
      className={styles.EventSelector}
      style={{ ["--hue" as any]: eventType.hue }}
    >
      {events[current].title}
    </div>
  );
};

type SelectEventProps = {
  select: (event: UntimedEvent) => void;
};

const SelectEvent = ({ select }: SelectEventProps) => {
  const events = getEvents();
  const groupedEvents: {
    [type: string]: UntimedEvent[];
  } = useMemo(() => _.groupBy(events, "type"), [events]);

  return (
    <div className={styles.SelectEvent}>
      {Object.entries(groupedEvents).map(([type, events]) => (
        <EventSelector
          key={type}
          type={parseInt(type)}
          events={events}
          select={select}
        />
      ))}
    </div>
  );
};

export default SelectEvent;
