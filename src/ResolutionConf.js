import React from "react";

const ResolutionConf = ({ width, height, onResolutionChange }) => (
  <div>
    <h2>Nastavení rozlišení plátna</h2>
    <label>
      Šířka:<input
        type="number"
        value={width}
        onChange={event => {
          onResolutionChange({ width: event.target.value });
        }}
      />px
    </label>
    <br />

    <label>
      Výška:<input
        type="number"
        value={height}
        onChange={event => {
          onResolutionChange({ height: event.target.value });
        }}
      />px
    </label>
    <p>
      !!! Změna rozlišení překreslí plátno. Vysoké rozlišení si nárokuje velký
      výkon !!!
    </p>
  </div>
);

export default ResolutionConf;
