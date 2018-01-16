import React from "react";
import { ChromePicker } from "react-color";

const BackgroundPicker = ({ color, onColorChange }) => (
  <div>
    <h2>Nastavení barvy pozadí</h2>
    <ChromePicker
      color={color}
      triangle="hide"
      onChange={onColorChange}
      disableAlpha={true}
    />
  </div>
);

export default BackgroundPicker;
