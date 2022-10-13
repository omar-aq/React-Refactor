import React from "react";
//
import UpdatedComponent from "./Hoc";

function ButtonsHandler({ counter, onIncrease, onDecrease }) {
  return (
    <div style={{ margin: "3px" }}>
      <button
        style={{ display: "inline", marginRight: "10px" }}
        onClick={onIncrease}
        className="tm-paging-link "
      >
        add({counter})
      </button>
      <button
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
