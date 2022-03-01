import { getTime, getDuration, useCurrentTimeStamp } from "../../util/time";
import { getEventType } from "../../events/events";

import type { Event } from "../../events/types";
import styles from "./Timer.module.scss";
import { useEffect, useState } from "react";

type CurrentEventProps = {
  event: Event;
};

const CurrentEvent = ({ event }: CurrentEventProps) => {
  const currentTimeStamp = useCurrentTimeStamp();
  const { type, startTime, title, description } = event;
  const eventType = getEventType(type);
  const [style, setStyle] = useState<{}>({
    ["--hue" as any]: 40,
    opacity: 0.5,
  });

  useEffect(() => {
    // making style a const doesn't work
    // on reloading the page the hue changes and stays at 40
    setStyle({ ["--hue" as any]: eventType.hue });
  }, [eventType]);

  return (
    <div className={styles.Event} style={style}>
      <div className={styles.header}>
        <div className={styles.start}>{getTime(startTime)}</div>
        <div className={styles.duration}>
          {getDuration(event.startTime, currentTimeStamp)}
        </div>
        <div className={styles.config}>
          <i className="material-icons">settings</i>
        </div>
      </div>
      <div className={styles.text}>
        <div className={styles.title}>{title}</div>
        {description && (
          <div className={styles.description}>
            <div>{description}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CurrentEvent;
