import { getTime, useCurrentTime } from "../../util/time";
import { useEffect, useRef, useState } from "react";

import styles from "./Timer.module.scss";

const Time = () => {
  const time = useCurrentTime();

  return <div className={styles.Time}>{time}</div>;
};

export default Time;
