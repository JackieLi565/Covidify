import React, { useEffect, useState } from 'react'
import './App.css'
import axios from "axios";
import IconBar from '../Components/SocialIcons';
import VerticalLine from '../Components/LineDiv';
import HorizontalLine from '../Components/HorizontalDiv';
import Receipt from '../Components/Receipt';
function App() {
  const [pt, setPT] = useState('ON');
/*  const [before, setBefore] = useState('2023-01-05'); //disabled for now
  const [after, setAfter] = useState('2023-01-01'); */
  const [date, setDate] = useState('2022-01-01')
  const [submit, setSubmit] = useState(false);
  const [dataRange, setDataRange] = useState([]);
  const [dataDate, setDataDate] = useState({});

  function toggle() {
    setSubmit(prev => {
      return !prev
    })
  }
  useEffect(() => { 
      //let rangeAPI = `https://api.opencovid.ca/summary?geo=pt&loc=${pt}&after=${after}&before=${before}&fill=true&version=true&pt_names=short&hr_names=hruid&fmt=json`;
      let dateAPI = `https://api.opencovid.ca/summary?geo=pt&loc=${pt}&date=${date}&fill=true&version=true&pt_names=short&hr_names=hruid&fmt=json`;
/*       axios.get(rangeAPI)
      .then(object => {
        setDataRange(object.data.data)
      }) */
      axios.get(dateAPI)
      .then(object => {
        setDate(object.data.data[0])
      })
  },[submit])
  //reloads 5 times
  return (
    <div className='container'>
      <div className='leftSide'>
        <div className='DMY_container'>
          <button className='DMY'>Daily</button>
          <button className='DMY'>Monthly</button>
          <button className='DMY'>Yearly</button>
          <div className='line'>
            <VerticalLine />
          </div>
        </div>
        <IconBar />
      </div>

      <div className='rightSide'>
        <button className='toggleBTN' onClick={toggle}>{submit? 'Print Receipt': 'New Receipt'}</button>
        <HorizontalLine />
        {!submit && <Receipt />}
      </div>
    </div>
  )
}

export default App
