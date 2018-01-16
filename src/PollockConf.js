import React from "react";
import StrokeAndFillConf from "./StrokeAndFillConf";

const PollockConf = ({ count, lineWidth, fill, onChange }) => (
  <div>
    <h3>Nastavení Pollock</h3>
    <label>
      Počet křivek ({count}): <br />
      <input
        type="range"
        value={count}
        min="0"
        max="2500"
        step="1"
        onChange={event => {
          onChange("count", event.target.value);
        }}
      />
    </label>
    <StrokeAndFillConf fill={fill} lineWidth={lineWidth} onChange={onChange} />
  </div>
);

export default PollockConf;
