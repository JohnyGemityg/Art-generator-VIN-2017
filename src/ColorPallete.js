import React from "react";
import ColorPicker from "./ColorPicker";
import { BlockPicker } from "react-color";

const ColorPallete = ({
  colors,
  activePickerId,
  onChosePickerId,
  onPickerDelete,
  onPickComplete,
  onBlur,
}) => (
  <div style={{ position: "relative", zIndex: 2 }}>
    <h2>Nastavení barevné palety</h2>
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {colors.map((color, i) => (
        <ColorPicker
          key={color + i}
          id={i}
          active={i === activePickerId}
          color={color}
          onActive={event => {
            onChosePickerId(i);
          }}
          onDelete={() => {
            onPickerDelete(i);
          }}
          onPickComplete={onPickComplete}
        />
      ))}
      <ColorPicker
        id={-1}
        active={activePickerId === -1}
        onActive={() => {
          onChosePickerId(-1);
        }}
        onPickComplete={onPickComplete}
      />
    </div>
    {activePickerId !== null ? (
      <div style={{ marginTop: 5 }}>
        <div
          onClick={onBlur}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
          }}
        />
        <BlockPicker
          color={colors[activePickerId]}
          triangle="hide"
          onChange={color => {
            onPickComplete(color, activePickerId);
          }}
        />
      </div>
    ) : null}
  </div>
);

export default ColorPallete;
