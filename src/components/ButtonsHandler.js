import React from "react";
//
import UpdatedComponent from "./Hoc";

function ButtonsHandler({ counter, onIncrease, onDecrease }) {
  return (
    <div style={{ margin: "3px" }}>
      <button
        dtat-testid="increase"
        style={{ display: "inline", marginRight: "10px" }}
        onClick={onIncrease}
        className="tm-paging-link "
        name="increase"
      >
        add({counter})
      </button>
      <button
        dtat-testid="decrease"
        style={{ display: "inline" }}
        onClick={onDecrease}
        className="tm-paging-link "
      >
        remove({counter})
      </button>
    </div>
  );
}

export default UpdatedComponent(ButtonsHandler);
