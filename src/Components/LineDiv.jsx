import React from 'react';
import '../styles/lineDiv.css'
import { useNavigate } from 'react-router-dom';
const VerticalLine = () => {
  const navigate = useNavigate();
  const ballStyle = {
    height: '20px',
    width: '20px',
    borderRadius: '50%',
    backgroundColor: '#DAD7CD',
    position: 'absolute',
    bottom: '0',
    left: '-8px',
  };

  return (
    <div className='lineStyle'>
        <button 
          className='titleStyle'
          onClick={() => navigate('/')}
        >Welcome to Covidify</button>
        <div style={ballStyle}></div>
    </div>
  );
};

export default VerticalLine;