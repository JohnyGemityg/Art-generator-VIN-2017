import React from "react";

const ArtChoiser = ({ activeArts, onSelect }) => (
  <div>
    <h2>Vyberte si varianty generátoru</h2>
    <label htmlFor="pollock">
      Křivky:{" "}
      <input
        type="checkbox"
        checked={activeArts.pollock}
        id="pollock"
        onChange={event => {
          onSelect("pollock", event.target.checked);
        }}
      />
    </label>
    <br />
    <label htmlFor="circles">
      Náhodné kružnice
      <input
        type="checkbox"
        checked={activeArts.circles}
        id="circles"
        onChange={event => {
          onSelect("circles", event.target.checked);
        }}
      />
    </label>
    <br />
    <label htmlFor="squares">
      Náhodné čtverce:{" "}
      <input
        type="checkbox"
        checked={activeArts.squares}
        id="squares"
        onChange={event => {
          onSelect("squares", event.target.checked);
        }}
      />
    </label>
    <br />
    <label htmlFor="rows">
      Řádné obdélníky:{" "}
      <input
        type="checkbox"
        checked={activeArts.rows}
        id="rows"
        onChange={event => {
          onSelect("rows", event.target.checked);
        }}
      />
    </label>
  </div>
);

export default ArtChoiser;
