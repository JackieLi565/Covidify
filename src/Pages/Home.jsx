import React, { useEffect, useState } from "react";
import "../styles/App.css";
import Receipt from "../Components/Receipt";
import Filter from "../Components/Filter";
import { useSearchParams } from "react-router-dom";
import { getDate } from "../utils/calcAverage";
import ReceiptHistory from "../Components/ReceiptHistory";
function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [receiptHistory, setReceiptHistory] = useState([]);
  const [url, setUrl] = useState("");
  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    const pt = searchParams.get("pt");

    if (searchParams.get("date") && pt) {
      const url = `https://api.opencovid.ca/summary?geo=pt&loc=${pt}&date=${searchParams.get(
        "date"
      )}&fill=true&version=true&pt_names=short&hr_names=hruid&fmt=json`;
      setUrl(url);
      setSubmit(true);
      setReceiptHistory((prev) => [
        ...prev,
        {
          date: searchParams.get("date"),
          pt,
        },
      ]);
    } else if (searchParams.get("start") && searchParams.get("end") && pt) {
      const url = `https://api.opencovid.ca/summary?geo=pt&loc=${pt}&after=${searchParams.get(
        "start"
      )}&before=${searchParams.get(
        "end"
      )}&fill=true&version=true&pt_names=short&hr_names=hruid&fmt=json`;
      setUrl(url);
      setSubmit(true);
      setReceiptHistory((prev) => [
        ...prev,
        {
          start: searchParams.get("start"),
          end: searchParams.get("end"),
          pt,
        },
      ]);
    } else if (searchParams.get("dmy")) {
      const url = `https://api.opencovid.ca/summary?geo=pt&loc=ON&date=${getDate()}&fill=true&version=true&pt_names=short&hr_names=hruid&fmt=json`;
      setUrl(url);
      setSubmit(true);
    } else {
      setSubmit(false);
    }
  }, [searchParams]);

  return (
    <div className="flex flex-col md:flex-row h-full overflow-y-auto md:overflow-y-hidden">
      <div className="flex justify-center items-center w-full lg:w-[58%] bg-darkGreen py-10">
        <div className="flex flex-col gap-10">
          <button
            className="text-pale text-6xl md:text-[170px] font-medium hover:-translate-y-5 transition-all duration-300"
            onClick={() => setSearchParams({ dmy: "day" })}
          >
            Daily
          </button>
          <button
            className="text-pale text-6xl md:text-[170px] font-medium hover:-translate-y-5 transition-all duration-300"
            onClick={() => setSearchParams({ dmy: "month" })}
          >
            Monthly
          </button>
          <button
            className="text-pale text-6xl md:text-[170px] font-medium hover:-translate-y-5 transition-all duration-300"
            onClick={() => setSearchParams({ dmy: "year" })}
          >
            Yearly
          </button>
        </div>
      </div>

      <div className="px-2 py-16 md:py-4 space-y-5 bg-pale w-full lg:w-[42%] md:overflow-y-auto">
        {submit ? (
          <Receipt url={url} handleReset={setSubmit} />
        ) : (
          <>
            <Filter />
            <ReceiptHistory history={receiptHistory} />
          </>
        )}
      </div>
    </div>
  );
}

export default Home;
