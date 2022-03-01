import { useCurrentTime } from "../../util/time";

import styles from "./Timer.module.scss";

const Time = () => {
  const time = useCurrentTime();

  return <div className={styles.Time}>{time}</div>;
};

export default Time;
