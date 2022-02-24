import moment from "moment";
import { useEffect, useRef, useState } from "react";

export const getTime = (time?: Date | number | string, format?: string) => {
  return moment(time).format(format ?? "HH:mm:ss");
};

export const getTimeStamp = (time?: Date | number | string) => {
  return moment(time).valueOf();
};

export const getDuration = (
  startTime: Date | number | string,
  endTime?: Date | number | string
) => {
  const start = moment(startTime);
  const end = moment(endTime);
  const duration = moment.duration(end.diff(start));
  const format = duration.asHours() >= 1 ? "H[h] m[m]" : "m[m] s[s]";
  return moment.utc(duration.asMilliseconds()).format(format);
};

export const useCurrent = (updateTimeMs: number = 500, getTime) => {
  const interval = useRef(null);
  const [time, setTime] = useState(getTime());

  useEffect(() => {
    interval.current = setInterval(() => {
      setTime(getTime());
    }, updateTimeMs);
    return () => clearInterval(interval.current);
  }, [getTime, updateTimeMs]);

  return time;
};

export const useCurrentTime = (updateTimeMs: number = 500) =>
  useCurrent(updateTimeMs, getTime);

export const useCurrentTimeStamp = (updateTimeMs: number = 500) =>
  useCurrent(updateTimeMs, getTimeStamp);
