import React, { useEffect, useState } from "react";
import HorizontalLine from "./HorizontalDiv";
import checkValidDate, {checkMatch} from "../utils/checkLogic";
import '../styles/filter.css'

function Filter(props) {
  const {tog, specific} = props;
  //specific
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [pt ,setPT] = useState('');
  const comboSpecific = `${year}-${month}-${day}`;

  function handleParentInfo() {
    console.log(comboSpecific, pt.toUpperCase())
    if(checkValidDate(comboSpecific) && checkMatch(pt.toUpperCase())) {
      specific(pt, comboSpecific)
    }

  }
  const container = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }


  return (
    <div style={container}>
      <button className='toggleBTN' onClick={handleParentInfo}>Print Receipt</button>
      <HorizontalLine />
      <div className="filter-container">
        <h1 className="filter-title">Filters</h1>
        <p className="filter-subtitle">Specific Date:</p>
        <div className="input-container">
          <input 
            className="twoLetter" 
            placeholder="DD" 
            type="text" 
            value={day}
            onChange={e => setDay(e.target.value)}
          />: 
          <input 
            className="twoLetter" 
            placeholder="MM" 
            type="text" 
            value={month}
            onChange={e => setMonth(e.target.value)}
          />: 
          <input 
            className="fourLetter" 
            placeholder="YYYY" 
            type="text" 
            value={year}
            onChange={e => setYear(e.target.value)}
          /> 
        </div>
        <p className="filter-subtitle">Specific Range</p>
        <div className="range-container">
          <div className="input-container">
            <input 
              className="twoLetter" 
              placeholder="DD" 
              type="text" 

              disabled
            />: 
            <input 
              className="twoLetter" 
              placeholder="MM" 
              type="text" 
            />: 
            <input 
              className="fourLetter" 
              placeholder="YYYY" 
              type="text" 
            /> 
            &#8212;
            <input 
              className="twoLetter" 
              placeholder="DD" 
              type="text" 
            />: 
            <input 
              className="twoLetter" 
              placeholder="MM" 
              type="text"
            />:
            <input 
              className="fourLetter" 
              placeholder="YYYY" 
              type="text" 
            /> 
          </div>
        </div>
        <p className="filter-subtitle">Province/Territory</p>
        <div className="input-container">
          <input 
            className="twoLetter" 
            placeholder="PT" 
            type="text" 
            value={pt}
            onChange={e => setPT(e.target.value)}
          />  
        </div>
        <button className="currentDate">Current Date</button>
      </div>
    </div>
  );
}

export default Filter;