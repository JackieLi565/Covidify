import React from 'react';
import '../styles/lineDiv.css'
const VerticalLine = () => {

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
        <div className='titleStyle'>Welcome to Covidify</div>
        <div style={ballStyle}></div>
    </div>
  );
};

export default VerticalLine;