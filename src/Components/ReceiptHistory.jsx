import React from "react";
import "../styles/filter.css";
import { useSearchParams } from "react-router-dom";
function ReceiptHistory({ history }) {
  const [__, setSearchParams] = useSearchParams();
  return (
    <div className="max-w-lg m-auto">
      <h1 className=" text-darkGreen text-2xl mb-2">Previous Receipt</h1>
      {history.map((date, index) => {
        return (
          <button
            onClick={() => setSearchParams(date)}
            className="pl-4 text-darkGreen text-xl block"
          >
            Receipt:{" "}
            {date?.date ? (
              date.date
            ) : (
              <p>
                {date.start} to {date.end}
              </p>
            )}{" "}
            {date.pt}
          </button>
        );
      })}
    </div>
  );
}

export default ReceiptHistory;
