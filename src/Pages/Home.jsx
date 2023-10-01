import React, { useEffect, useState } from "react";
import "../styles/App.css";
import axios from "axios";
import Receipt from "../Components/Receipt";
import Filter from "../Components/Filter";
import calcDMYavg, {
  formatRange,
  formatCustom,
  getDateDiff,
} from "../utils/calcAverage";
import ReceiptHistory from "../Components/ReceiptHistory";

function Home() {
  const [totalData, setTotalData] = useState({});
  const [currentReceipt, setCurrentReceipt] = useState({});
  const [submit, setSubmit] = useState(false); //toggle receipt
  const [receiptHistory, setReceiptHistory] = useState([]);

  function setSpecificDate(pt, date) {
    const dateAPI = `https://api.opencovid.ca/summary?geo=pt&loc=${pt}&date=${date}&fill=true&version=true&pt_names=short&hr_names=hruid&fmt=json`;
    axios
      .get(dateAPI)
      .then((object) => {
        setCurrentReceipt(formatCustom(object.data.data[0]));
        setSubmit(true);
      })
      .catch((error) => {
        console.log(error);
      });
    handleReceiptHistory({ id: 1, pt: pt, date: [date] });
  }

  function setRangeDate(after, before, pt) {
    const rangeAPI = `https://api.opencovid.ca/summary?geo=pt&loc=${pt}&after=${after}&before=${before}&fill=true&version=true&pt_names=short&hr_names=hruid&fmt=json`;
    axios
      .get(rangeAPI)
      .then((object) => {
        setCurrentReceipt(formatRange(object.data.data));
        setSubmit(true);
      })
      .catch((error) => {
        console.log(error);
      });
    handleReceiptHistory({ id: 2, pt: pt, date: [after, before] });
  }

  function handleReceiptHistory(object) {
    setReceiptHistory((prev) => {
      const current = prev;
      if (prev.length > 4) {
        current.pop();
        return [object, ...current];
      } else {
        return [object, ...prev];
      }
    });
  }

  function statusHandle(choice) {
    switch (choice) {
      case "day":
        setCurrentReceipt(calcDMYavg(totalData, getDateDiff()));
        break;
      case "month":
        setCurrentReceipt(calcDMYavg(totalData, getDateDiff() / 30.417));
        break;
      case "year":
        setCurrentReceipt(calcDMYavg(totalData, getDateDiff() / 365));
        break;
      default:
        break;
    }
    setSubmit(true);
  }
  useEffect(() => {
    let totalData = `https://api.opencovid.ca/summary?geo=pt&loc=ON&date=2023-02-19&fill=true&version=true&pt_names=short&hr_names=hruid&fmt=json`;
    axios
      .get(totalData)
      .then((object) => {
        setTotalData(object.data.data[0]);
      })
      .catch((error) => {
        console.log("Error");
      });
  }, []);
  return (
    <div className="flex flex-col lg:flex-row h-screen overflow-y-auto overflow-x-hidden">
      <div className="flex justify-center items-center w-full lg:w-[58%] bg-darkGreen py-10">
        <div className="flex flex-col gap-10">
          <button
            className="text-pale text-6xl md:text-[170px] font-medium hover:-translate-y-5 transition-all duration-300"
            onClick={() => statusHandle("day")}
          >
            Daily
          </button>
          <button
            className="text-pale text-6xl md:text-[170px] font-medium hover:-translate-y-5 transition-all duration-300"
            onClick={() => statusHandle("month")}
          >
            Monthly
          </button>
          <button
            className="text-pale text-6xl md:text-[170px] font-medium hover:-translate-y-5 transition-all duration-300"
            onClick={() => statusHandle("year")}
          >
            Yearly
          </button>
        </div>
      </div>
      <div className="py-16 space-y-5 bg-pale w-full lg:w-[42%]">
        {submit ? (
          <Receipt child={currentReceipt} tog={setSubmit} />
        ) : (
          <Filter range={setRangeDate} specific={setSpecificDate} />
        )}
        {!submit && (
          <ReceiptHistory
            receipts={receiptHistory}
            range={setRangeDate}
            specific={setSpecificDate}
          />
        )}
      </div>
    </div>
  );
}

export default Home;
