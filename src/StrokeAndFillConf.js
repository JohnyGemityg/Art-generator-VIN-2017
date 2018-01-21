import React from "react";

const StrokeAndFillConf = ({ lineWidth, fill, onChange }) => (
  <div>
    <label>
      Koeficient tlouštky tahu({lineWidth}):
      <br />
      <input
        type="range"
        value={lineWidth}
        min="0"
        max="100"
        step="0.5"
        onChange={event => {
          onChange("lineWidth", event.target.value);
        }}
      />
    </label>
    <br />
    <label>
      Vyplnit objekt barvou:
      <input
        type="checkbox"
        checked={fill}
        onChange={event => {
          onChange("fill", event.target.checked);
        }}
      />
    </label>
  </div>
);

export default StrokeAndFillConf;
