import moment, { Duration, Moment } from "moment";
import { useEffect, useRef, useState } from "react";

export const getTime = (
  time?: Date | number | string,
  format?: string
): string => {
  return moment(time).format(format ?? "HH:mm");
};

export const getTimeStamp = (time?: Date | number | string): number => {
  return moment(time).valueOf();
};

export const _getDuration = (
  startTime: Date | number | string,
  endTime?: Date | number | string
): number => {
  const start = moment(startTime);
  const end = moment(endTime);
  const duration = moment.duration(end.diff(start));
  return duration.asMilliseconds();
};

export const getDuration = (
  startTime: Date | number | string,
  endTime?: Date | number | string
): string => {
  const duration = _getDuration(startTime, endTime);
  const format = duration >= 1000 * 3600 ? "H[h] m[m]" : "m[m] s[s]";
  return moment.utc(duration).format(format);
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
  useCurrent(updateTimeMs, () => getTime(undefined, "HH:mm:ss"));

export const useCurrentTimeStamp = (updateTimeMs: number = 500): number =>
  useCurrent(updateTimeMs, getTimeStamp);
