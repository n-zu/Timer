import React from "react";
import { getEventType } from "../../events/events";

import { DisplayEvent } from "../../events/types";
import styles from "./EventTimeline.module.scss";

type EventBlockProps = {
  event: DisplayEvent;
};

const EventBlock = ({ event }: EventBlockProps) => {
  const eventType = getEventType(event.type);
  const style = {
    ["--hue" as any]: eventType.hue,
    ["--dur" as any]: event._duration,
  };

  return (
    <div className={styles.EventBlock} style={style}>
      <div className={styles.title}>
        {event.title} - {event.duration ?? "ongoing"}
      </div>
      <div className={styles.details}>
        <div className={styles.description}>{event.description}</div>
        <div className={styles.time}>
          {event.startTime} to {event.endTime ?? "now"}
        </div>
      </div>
    </div>
  );
};

export default EventBlock;
