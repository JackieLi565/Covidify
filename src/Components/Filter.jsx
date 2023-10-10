import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getDate } from "../utils/calcAverage";
import "../styles/filter.css";
import { Button } from "./Button";

const formatDate = (day, month, year) => {
  return `${year}-${month}-${day}`;
};

function Filter() {
  const [__, setSearchParams] = useSearchParams();
  const [firstGroup, setFirstGroup] = useState(false);
  const [secondGroup, setSecondGroup] = useState(false);

  const inputs = [
    { placeholder: "DD", name: "day" },
    { placeholder: "MM", name: "month" },
    { placeholder: "YYYY", name: "year" },
  ];
  const startRange = [
    { placeholder: "DD", name: "eDay" },
    { placeholder: "MM", name: "sMonth" },
    { placeholder: "YYYY", name: "sYear" },
  ];
  const endRange = [
    { placeholder: "DD", name: "eDay" },
    { placeholder: "MM", name: "eMonth" },
    { placeholder: "YYYY", name: "eYear" },
  ];

  const onFinish = (e) => {
    e.preventDefault();

    const formdata = new FormData(e.target);
    const pt = formdata.get("pt");
    if (!firstGroup && secondGroup && pt) {
      const [day, month, year] = inputs.map(({ name }) => formdata.get(name));
      setSearchParams({
        date: formatDate(day, month, year),
        pt,
      });
    } else if (!secondGroup && firstGroup && pt) {
      const [sDay, sMonth, sYear] = startRange.map(({ name }) =>
        formdata.get(name)
      );
      const [eDay, eMonth, eYear] = endRange.map(({ name }) =>
        formdata.get(name)
      );

      setSearchParams({
        start: formatDate(sDay, sMonth, sYear),
        end: formatDate(eDay, eMonth, eYear),
        pt,
      });
    } else {
      alert("error");
    }
  };

  return (
    <form onSubmit={onFinish} className="flex flex-col gap-2 items-center">
      <Button htmlType="submit">Print Receipt</Button>
      <div className="border-b border-darkGreen max-w-md m-auto"></div>
      <div className="bg-lightGreen rounded max-w-xl m-auto px-10 py-4">
        <p className="filter-subtitle">Specific Date:</p>
        <div className="text-pale space-x-1">
          <div className="space-x-1">
            {inputs.map(({ name, placeholder }) => {
              return (
                <input
                  key={name}
                  name={name}
                  className="twoLetter text-darkGreen"
                  placeholder={placeholder}
                  type="text"
                  onChange={(e) =>
                    e.target.value
                      ? setSecondGroup(true)
                      : setSecondGroup(false)
                  }
                  disabled={firstGroup}
                />
              );
            })}
          </div>
        </div>
        <p className="filter-subtitle">Specific Range</p>
        <div className="space-x-1 text-pale flex flex-col md:flex-row md:items-center">
          <div className="space-x-1">
            {startRange.map(({ name, placeholder }) => {
              return (
                <input
                  key={name}
                  name={name}
                  className="twoLetter text-darkGreen"
                  placeholder={placeholder}
                  type="text"
                  onChange={(e) =>
                    e.target.value ? setFirstGroup(true) : setFirstGroup(false)
                  }
                  disabled={secondGroup}
                />
              );
            })}
          </div>
          <span>to</span>
          <div className="space-x-1">
            {endRange.map(({ name, placeholder }) => {
              return (
                <input
                  key={name}
                  name={name}
                  className="twoLetter text-darkGreen"
                  placeholder={placeholder}
                  type="text"
                  onChange={(e) =>
                    e.target.value ? setFirstGroup(true) : setFirstGroup(false)
                  }
                  disabled={secondGroup}
                />
              );
            })}
          </div>
        </div>
        <p className="filter-subtitle">Province/Territory</p>
        <div className="input-container">
          <input
            className="twoLetter text-darkGreen"
            name="pt"
            placeholder="PT"
            type="text"
          />
        </div>
        <button
          type="button"
          className="currentDate"
          onClick={() =>
            setSearchParams({
              pt: "ON",
              date: getDate(),
            })
          }
        >
          Current Date
        </button>
      </div>
    </form>
  );
}

export default Filter;
