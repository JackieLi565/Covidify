import React from "react";
import "../styles/filter.css";
function OldReceipts({ id, pt, date, handleClick }) {
  return (
    <button
      onClick={() => handleClick(id, pt, date)}
      className="pl-4 text-darkGreen text-xl block"
    >
      Receipt: {`${date} ${pt}`}
    </button>
  );
}

export default OldReceipts;
