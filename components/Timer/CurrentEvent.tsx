import { getTime, getDuration, useCurrentTimeStamp } from "../../util/time";

import { Event } from "../../util/types";
import { eventHues } from "./Events";
import styles from "./Timer.module.scss";

type CurrentEventProps = {
  event: Event;
};

const CurrentEvent = ({ event }: CurrentEventProps) => {
  const currentTimeStamp = useCurrentTimeStamp();
  const { type, startTime, title, description } = event;

  return (
    <div className={styles.Event} style={{ ["--hue" as any]: eventHues[type] }}>
      <div className={styles.header}>
        <div className={styles.start}>{getTime(startTime, "HH:mm")}</div>
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
