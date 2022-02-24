import { getTimeStamp } from "../../util/time";

import { events } from "./Events";

const SelectEvent = ({ setEvent }) => {
  const addEvnt = (type, title?: string, description?: string) =>
    setEvent({
      startTime: getTimeStamp(),
      type,
      title,
      description,
    });

  const btn = (type, title?: string, description?: string) => (
    <button onClick={() => addEvnt(type, title, description)}>{title}</button>
  );

  return (
    <div style={{ marginTop: "1em", display: "grid", gap: 5 }}>
      {Object.keys(events).map((key) => (
        <div key={key}>
          {btn(events[key].type, events[key].title, events[key].description)}
        </div>
      ))}
    </div>
  );
};

export default SelectEvent;
