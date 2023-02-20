import React, { useEffect, useState } from 'react'
import './App.css'
import axios from "axios";
import IconBar from './Components/SocialIcons';
import VerticalLine from './Components/LineDiv';
import Receipt from './Components/Receipt';
import Filter from './Components/Filter';
import calcDMYavg, {getDate, formatCustom} from './utils/calcAverage';

function App() {
  const [pt, setPT] = useState('ON');
/*  const [before, setBefore] = useState('2023-01-05'); //disabled for now
  const [after, setAfter] = useState('2023-01-01'); */
  const [date, setDate] = useState('2022-01-01')
  const [submit, setSubmit] = useState(false);
  //const [dataRange, setDataRange] = useState([]);
  const [dataDate, setDataDate] = useState({});
  const [totalData, setTotalData] = useState({});
  //const [status, setStatus] = useState(null)
  const [currentReceipt, setCurrentReceipt] = useState({})

  const [temp, setTemp] = useState('')

  const array = calcDMYavg(totalData)

  function toggle() {
    setSubmit(false)
  }

  function setSpecificDate(pt, date) {
    setDate(date);
    setPT(pt);
    statusHandle(false, false, false, true, false)
  }

  function statusHandle(day, month, year, specific, range) {
    if(day) {
      setTemp('day')
    }
    if(month) {
      setTemp('month')
    }
    if(year) {
      setTemp('year')
    }
    if(specific) {
      setTemp('specific')
    }
    setSubmit(true)
  }

  useEffect(() => { 
      //let rangeAPI = `https://api.opencovid.ca/summary?geo=pt&loc=${pt}&after=${after}&before=${before}&fill=true&version=true&pt_names=short&hr_names=hruid&fmt=json`;
      let dateAPI = `https://api.opencovid.ca/summary?geo=pt&loc=${pt}&date=${date}&fill=true&version=true&pt_names=short&hr_names=hruid&fmt=json`;
      console.log(dateAPI)
      let totalData = `https://api.opencovid.ca/summary?geo=pt&loc=ON&date=2023-02-19&fill=true&version=true&pt_names=short&hr_names=hruid&fmt=json`;
      axios.get(dateAPI) //date`
      .then(object => {
        console.log(object.data.data[0])
        setDataDate(object.data.data[0])
      })
      axios.get(totalData) //date`
      .then(object => {
        setTotalData(object.data.data[0])
      })
  },[date, pt])

  useEffect(() => {
    if(temp == 'day') {
      setCurrentReceipt(array[0])
    }
    if(temp == 'month') {
      setCurrentReceipt(array[1])
    }
    if(temp == 'year') {
      setCurrentReceipt(array[2])
    }
    if(temp == 'specific') {
      setCurrentReceipt(formatCustom(dataDate))
    }
  }, [temp])

  //reloads 5 times
  return (
    <div className='container'>
      <div className='leftSide'>
        <div className='DMY_container'>
          <button 
            className='DMY' 
            onClick={() => statusHandle(true, false, false, false, false)}
            >
              Daily
          </button>
          <button 
            className='DMY' 
            onClick={() => statusHandle(false, true, false, false, false)}>
              Monthly
          </button>
          <button 
            className='DMY' 
            onClick={() => statusHandle(false, false, true, false, false)}>
              Yearly
          </button>
          <div className='line'>
            <VerticalLine />
          </div>
        </div>
        <IconBar />
      </div>

      <div className='rightSide'>
        {submit ? <Receipt child={currentReceipt} tog={toggle}/>: <Filter specific={setSpecificDate} tog={statusHandle}/>}
      </div>
    </div>
  )
}

export default App
