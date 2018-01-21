import React from "react";
import StrokeAndFillConf from "./StrokeAndFillConf";

const RowsConf = ({ widthC, heightC, nice, lineWidth, fill, onChange }) => (
  <div>
    <h3>Nastavení řádných koeficientů</h3>
    <label>
      Nastavení koeficinet šířky ({widthC}): <br />
      <input
        type="range"
        value={widthC}
        min="1"
        max="250"
        step="1"
        onChange={event => {
          onChange("widthC", event.target.value);
        }}
      />
    </label>
    <br />
    <label>
      Nastavení koeficinet výšky ({heightC}): <br />
      <input
        type="range"
        value={heightC}
        min="1"
        max="250"
        step="1"
        onChange={event => {
          onChange("heightC", event.target.value);
        }}
      />
    </label>
    <br />
    <label>
      Uhlazený režim:
      <input
        type="checkbox"
        checked={nice}
        onChange={event => {
          onChange("nice", event.target.checked);
        }}
      />
    </label>
    <StrokeAndFillConf fill={fill} lineWidth={lineWidth} onChange={onChange} />
  </div>
);

export default RowsConf;
