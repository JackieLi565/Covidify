import React from "react";
import ReceiptData from "./ReceiptData";
const Receipt = ({ child, tog, date }) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <button
        className="bg-lightGreen text-pale text-3xl max-w-sm rounded px-20 py-3"
        onClick={() => tog(false)}
      >
        New Receipt
      </button>
      <ReceiptData subHead={date} data={child} />
    </div>
  );
};

export default Receipt;
