import moment from "moment";
import { useEffect, useRef, useState } from "react";

export const getTime = (
  time?: Date | number | string,
  format?: string
): string => {
  return moment(time).format(format ?? "HH:mm:ss");
};

export const getTimeStamp = (time?: Date | number | string): number => {
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

export const useCurrent = <T>(
  updateTimeMs: number = 500,
  getTime: () => T
): T => {
  const interval = useRef(null);
  const [time, setTime] = useState<T>(getTime());

  useEffect(() => {
    interval.current = setInterval(() => {
      setTime(getTime());
    }, updateTimeMs);
    return () => clearInterval(interval.current);
  }, [getTime, updateTimeMs]);

  return time;
};

export const useCurrentTime = (updateTimeMs: number = 500): string =>
  useCurrent(updateTimeMs, getTime);

export const useCurrentTimeStamp = (updateTimeMs: number = 500): number =>
  useCurrent(updateTimeMs, getTimeStamp);
