import React from "react";
import OldReceipts from "./oldReceipt";
import "../styles/filter.css";
function ReceiptHistory({ receipts, range, specific }) {
  function handleReceiptClick(id, pt, date) {
    const [after, before] = date;
    if (id === 1) {
      specific(pt, after);
    } else {
      range(after, before, pt);
    }
  }
  return (
    <div className="max-w-lg m-auto">
      <h1 className=" text-darkGreen text-2xl mb-2">Previous Receipt</h1>
      {receipts.map((object, index) => {
        return (
          <OldReceipts
            key={index}
            id={object.id}
            date={object.date}
            pt={object.pt}
            handleClick={handleReceiptClick}
          />
        );
      })}
    </div>
  );
}

export default ReceiptHistory;
