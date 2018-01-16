import React from "react";
import StrokeAndFillConf from "./StrokeAndFillConf";

const CirclesConf = ({ count, radiusC, lineWidth, fill, onChange }) => (
  <div>
    <h3>Nastavení náhodných kružnic</h3>
    <label>
      Počet kružnic ({count}): <br />
      <input
        type="range"
        value={count}
        min="0"
        max="25000"
        step="1"
        onChange={event => {
          onChange("count", event.target.value);
        }}
      />
    </label>
    <br />
    <label>
      Koeficient poloměru ({radiusC}): <br />
      <input
        type="range"
        value={radiusC}
        min="0"
        max="250"
        step="1"
        onChange={event => {
          onChange("radiusC", event.target.value);
        }}
      />
    </label>
    <StrokeAndFillConf fill={fill} lineWidth={lineWidth} onChange={onChange} />
  </div>
);

export default CirclesConf;
