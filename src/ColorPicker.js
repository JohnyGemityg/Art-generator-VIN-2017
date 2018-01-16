import React from "react";

const styles = {
  wrap: {
    minWidth: 25,
    minHeight: 50,
    border: "1px solid black",
    cursor: "pointer",
  },
};

const ColorPicker = ({
  color,
  id,
  active,
  onActive,
  onDelete,
  onPickComplete,
}) => (
  <div>
    <div style={{ ...styles.wrap, backgroundColor: color }} onClick={onActive}>
      {onDelete ? <button onClick={onDelete}>X</button> : null}
    </div>
  </div>
);

export default ColorPicker;
