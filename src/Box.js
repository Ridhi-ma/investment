import React, { useState } from "react";
import "./Box.css";
const Box = () => {
  const [initial, SetInitial] = useState(16.0);
  const slide = (event) => {
    SetInitial(event.target.value);
  };

  return (
    <div className="j">
      <div className="a">
        <p className="f">100KPAGEVIEWS</p>
        <p className="g">
          <b>${initial}</b>
        </p>
        <p className="h">/month</p>
      </div>
      <input
        onChange={slide}
        value={initial}
        type="range"
        from="0"
        to="100"
      ></input>
      <p className="z">Monthly billing</p>
      <input type="checkbox" id="switch" class="checkbox" />
      <label for="switch" class="toggle"></label>
      <p className="rid">Yearly billing</p>
      <div className="bas">25% discount</div>
    </div>
  );
};
export default Box;
