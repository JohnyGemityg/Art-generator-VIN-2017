import React from "react";
import StrokeAndFillConf from "./StrokeAndFillConf";

const SquareConf = ({ count, sizeC, lineWidth, fill, onChange }) => (
  <div>
    <h3>Nastavení náhodných čtverců</h3>
    <label>
      Počet čtverců ({count}): <br />
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
      Koeficient velikosti ({sizeC}): <br />
      <input
        type="range"
        value={sizeC}
        min="0"
        max="250"
        step="1"
        onChange={event => {
          onChange("sizeC", event.target.value);
        }}
      />
    </label>
    <StrokeAndFillConf fill={fill} lineWidth={lineWidth} onChange={onChange} />
  </div>
);

export default SquareConf;
