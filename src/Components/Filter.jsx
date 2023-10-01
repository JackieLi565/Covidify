import React, { useState } from "react";
import checkValidDate, { checkMatch } from "../utils/checkLogic";
import { getDate } from "../utils/calcAverage";
import "../styles/filter.css";

function Filter({ specific, range }) {
  //first group && after
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  //second group && before
  const [eDay, setEDay] = useState("");
  const [eMonth, setEMonth] = useState("");
  const [eYear, setEYear] = useState("");

  const [pt, setPT] = useState("");

  const comboSpecific = `${year}-${month}-${day}`;
  const comboRange = `${eYear}-${eMonth}-${eDay}`;

  const [inputValues, setInputValues] = useState(Array(9).fill(""));
  const [firstGroupDisabled, setFirstGroupDisabled] = useState(false);
  const [secondGroupDisabled, setSecondGroupDisabled] = useState(false);

  function handleParentInfo() {
    if (
      secondGroupDisabled &&
      checkValidDate(comboSpecific) &&
      checkMatch(pt.toUpperCase())
    ) {
      specific(pt, comboSpecific);
    } else if (
      firstGroupDisabled &&
      checkValidDate(comboRange) &&
      checkValidDate(comboSpecific) &&
      checkMatch(pt.toUpperCase())
    ) {
      range(comboRange, comboSpecific, pt);
    } else {
      alert(
        "Error: Please provide the correct date in the following format Day : Month : Year with leading zero if needed"
      );
    }
  }

  function handleSolo() {
    specific("ON", getDate());
  }

  //super jank solution
  function disableBox(index, value) {
    const newInputValues = [...inputValues];
    newInputValues[index] = value;
    setInputValues(newInputValues);
    switch (index) {
      case 0:
        setDay(value);
        break;
      case 1:
        setMonth(value);
        break;
      case 2:
        setYear(value);
        break;
      case 3:
        setEDay(value);
        break;
      case 4:
        setEMonth(value);
        break;
      case 5:
        setEYear(value);
        break;
      case 6:
        setDay(value);
        break;
      case 7:
        setMonth(value);
        break;
      case 8:
        setYear(value);
        break;
    }

    if (index < 3) {
      // Check if all three of the first input buttons are empty
      const allFirstGroupInputsEmpty = newInputValues
        .slice(0, 3)
        .every((val) => val === "");
      setSecondGroupDisabled(!allFirstGroupInputsEmpty);
      setFirstGroupDisabled(false);
    } else {
      // Check if any of the last six input buttons have text
      const anySecondGroupInputHasText = newInputValues
        .slice(3)
        .some((val) => val !== "");
      setFirstGroupDisabled(anySecondGroupInputHasText);
      setSecondGroupDisabled(false);
    }
  }

  return (
    <>
      <button
        className="bg-lightGreen max-w-sm m-auto block px-20 py-2 rounded text-pale text-2xl"
        onClick={handleParentInfo}
      >
        Print Receipt
      </button>
      <div className="border-b border-darkGreen max-w-md m-auto"></div>
      <div className="bg-lightGreen rounded max-w-lg m-auto px-10 py-4">
        <p className="filter-subtitle">Specific Date:</p>
        <div className="text-pale space-x-1">
          <input
            className="twoLetter text-darkGreen"
            placeholder="DD"
            type="text"
            value={inputValues[0]}
            onChange={(e) => disableBox(0, e.target.value)}
            disabled={firstGroupDisabled}
          />
          <span>:</span>
          <input
            className="twoLetter text-darkGreen"
            placeholder="MM"
            type="text"
            value={inputValues[1]}
            onChange={(e) => disableBox(1, e.target.value)}
            disabled={firstGroupDisabled}
          />
          <span>:</span>
          <input
            className="fourLetter text-darkGreen"
            placeholder="YYYY"
            type="text"
            value={inputValues[2]}
            onChange={(e) => disableBox(2, e.target.value)}
            disabled={firstGroupDisabled}
          />
        </div>
        <p className="filter-subtitle">Specific Range</p>
        <div className="space-x-1 text-pale">
          <input
            className="twoLetter text-darkGreen"
            placeholder="DD"
            type="text"
            value={inputValues[3]}
            onChange={(e) => disableBox(3, e.target.value)}
            disabled={secondGroupDisabled}
          />
          <span>:</span>
          <input
            className="twoLetter text-darkGreen"
            placeholder="MM"
            type="text"
            value={inputValues[4]}
            onChange={(e) => disableBox(4, e.target.value)}
            disabled={secondGroupDisabled}
          />
          <span>:</span>
          <input
            className="fourLetter text-darkGreen"
            placeholder="YYYY"
            type="text"
            value={inputValues[5]}
            onChange={(e) => disableBox(5, e.target.value)}
            disabled={secondGroupDisabled}
          />
          <span>-</span>
          <input
            className="twoLetter text-darkGreen"
            placeholder="DD"
            type="text"
            value={inputValues[6]}
            onChange={(e) => disableBox(6, e.target.value)}
            disabled={secondGroupDisabled}
          />
          <span>:</span>
          <input
            className="twoLetter text-darkGreen"
            placeholder="MM"
            type="text"
            value={inputValues[7]}
            onChange={(e) => disableBox(7, e.target.value)}
            disabled={secondGroupDisabled}
          />
          <span>:</span>
          <input
            className="fourLetter text-darkGreen"
            placeholder="YYYY"
            type="text"
            value={inputValues[8]}
            onChange={(e) => disableBox(8, e.target.value)}
            disabled={secondGroupDisabled}
          />
        </div>
        <p className="filter-subtitle">Province/Territory</p>
        <div className="input-container">
          <input
            className="twoLetter text-darkGreen"
            placeholder="PT"
            type="text"
            value={pt}
            onChange={(e) => setPT(e.target.value)}
          />
        </div>
        <button className="currentDate" onClick={handleSolo}>
          Current Date
        </button>
      </div>
    </>
  );
}

export default Filter;
