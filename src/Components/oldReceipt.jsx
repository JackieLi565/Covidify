import React from "react";
import "../styles/filter.css";
function OldReceipts({ id, pt, date, handleClick }) {
  return (
    <div
      onClick={() => handleClick(id, pt, date)}
      className="pl-4 text-darkGreen text-xl "
    >
      Receipt: {`${date} ${pt}`}
    </div>
  );
}

export default OldReceipts;
