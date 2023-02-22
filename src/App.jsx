import React, { useEffect, useState } from 'react'
import './App.css'
import axios from "axios";
import IconBar from './Components/SocialIcons';
import VerticalLine from './Components/LineDiv';
import Receipt from './Components/Receipt';
import Filter from './Components/Filter';
import calcDMYavg, {formatRange, formatCustom, getDateDiff} from './utils/calcAverage';
import ReceiptHistory from './Components/ReceiptHistory';

function App() {
  const [totalData, setTotalData] = useState({});
  const [currentReceipt, setCurrentReceipt] = useState({});
  const [submit, setSubmit] = useState(false); //toggle receipt
  const [receiptHistory, setReceiptHistory] = useState([]);
  //const array = calcDMYavg(totalData);

  function setSpecificDate(pt, date) {
    const dateAPI = `https://api.opencovid.ca/summary?geo=pt&loc=${pt}&date=${date}&fill=true&version=true&pt_names=short&hr_names=hruid&fmt=json`;
    axios.get(dateAPI)
    .then(object => {
      setCurrentReceipt(formatCustom(object.data.data[0]))    
      setSubmit(true)
    })
    .catch(error => {
      console.log(error)
    })
    handleReceiptHistory({id: 1,pt: pt, date: [date]});
  }

  function setRangeDate(after, before, pt) {
    const rangeAPI = `https://api.opencovid.ca/summary?geo=pt&loc=${pt}&after=${after}&before=${before}&fill=true&version=true&pt_names=short&hr_names=hruid&fmt=json`;
    axios.get(rangeAPI)
    .then(object => { 
      setCurrentReceipt(formatRange(object.data.data))
      setSubmit(true)
    })
    .catch(error => {
      console.log(error)
    })
    handleReceiptHistory({id: 2, pt: pt, date: [after, before]});
  }

  function handleReceiptHistory(object) {
    setReceiptHistory(prev => {
      const current = prev;
      if(prev.length > 4) {
        current.pop();
        return [object, ...current]
      } else {
        return [object,...prev]
      }
    })
  }

  function statusHandle(choice) {
    switch(choice) {
      case 'day':
        setCurrentReceipt(calcDMYavg(totalData, getDateDiff()))
        break;
      case 'month':
        setCurrentReceipt(calcDMYavg(totalData, getDateDiff()/30.417))
        break;
      case 'year':
        setCurrentReceipt(calcDMYavg(totalData, getDateDiff()/365))
        break;
      default:
        break;
    }
    setSubmit(true)
  }
  useEffect(() => { 
      let totalData = `https://api.opencovid.ca/summary?geo=pt&loc=ON&date=2023-02-19&fill=true&version=true&pt_names=short&hr_names=hruid&fmt=json`;
      axios.get(totalData) 
      .then(object => {
        setTotalData(object.data.data[0])
      })
      .catch(error => {
        console.log('Error')
      })
  },[])
  return (
    <div className='container'>
      <div className='leftSide'>
        <div className='DMY_container'>
          <button 
            className='DMY' 
            onClick={() => statusHandle('day')}
            >
              Daily
          </button>
          <button 
            className='DMY' 
            onClick={() => statusHandle('month')}>
              Monthly
          </button>
          <button 
            className='DMY' 
            onClick={() => statusHandle('year')}>
              Yearly
          </button>
          <div className='line'>
            <VerticalLine />
          </div>
        </div>
        <IconBar />
      </div>
      <div className='rightSide'>
        {submit ? <Receipt child={currentReceipt} tog={setSubmit}/> : 
                  <Filter range={setRangeDate} specific={setSpecificDate}/>}
        {!submit && <ReceiptHistory receipts={receiptHistory} range={setRangeDate} specific={setSpecificDate} />}
      </div>
    </div>
  )
}

export default App
