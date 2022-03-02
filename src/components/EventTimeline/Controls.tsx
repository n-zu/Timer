import styles from "./EventTimeline.module.scss";

const Controls = ({ fullEvents, addEvent, clearEvents }) => {
  return (
    <div className={styles.Controls}>
      <button
        onClick={() =>
          addEvent({
            id: fullEvents.length,
            type: 0,
            title: "TEST",
            description: "Test Event",
            startTime: 0,
          })
        }
      >
        Add event
      </button>
      <button onClick={() => clearEvents()}>Clear events</button>
    </div>
  );
};

export default Controls;
