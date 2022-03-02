import { useMemo } from "react";
import { connect } from "react-redux";
import type { ConnectedProps, RootState, AppDispatch } from "../../store/hooks";
import { addEvent, clearEvents } from "../../store/eventsSlice";
import { calculateDisplayEvents, calculateStats } from "../../events/functions";

import PieChart from "./PieChart";

import { Event } from "../../events/types";
import styles from "./EventStatistics.module.scss";

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type EventStatisticsProps = PropsFromRedux & {};

const EventStatistics = ({
  events,
  addEvent,
  clearEvents,
}: EventStatisticsProps) => {
  // const { events, loading } = useEvents();
  const displayEvents = useMemo(() => calculateDisplayEvents(events), [events]);
  const stats = useMemo(() => calculateStats(displayEvents), [displayEvents]);

  return (
    <div className={styles.EventStatistics}>
      <PieChart data={stats} />
    </div>
  );
};

function mapStateToProps(state: RootState) {
  return {
    events: state.events.events,
  };
}

function mapDispatchToProps(dispatch: AppDispatch) {
  return {
    addEvent: (event: Event) => dispatch(addEvent(event)),
    clearEvents: () => dispatch(clearEvents()),
  };
}

export default connector(EventStatistics);
