import { getTimeStamp } from "../../util/time";

import {
  connect,
  type ConnectedProps,
  type RootState,
  type AppDispatch,
} from "../../store/hooks";
import { addEvent } from "../../store/eventsSlice";

import CurrentTime from "./CurrentTime";
import CurrentEvent from "./CurrentEvent";
import SelectEvent from "./SelectEvent";

import type { Event, UntimedEvent } from "../../events/types";
import styles from "./Timer.module.scss";

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type TimerProps = PropsFromRedux & {};

const Timer = ({ events, addEvent }: TimerProps) => {
  const event = events?.[events.length - 1] ?? {
    id: 0,
    type: 0,
    title: "Untitled",
    description: "App's initial event",
    startTime: getTimeStamp(),
  };

  const select = (event: UntimedEvent) => {
    const newEvent: Event = {
      id: events.length,
      ...event,
      startTime: getTimeStamp(),
    };
    addEvent(newEvent);
  };

  return (
    <section className={styles.container}>
      <div className={styles.current}>
        <CurrentTime />
        <CurrentEvent event={event} />
      </div>
      <div className={styles.selector}>
        <SelectEvent select={select} />
      </div>
    </section>
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
  };
}

export default connector(Timer);
