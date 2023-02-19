import React from 'react';

const VerticalLine = () => {
  const lineStyle = {
    height: '780px',
    width: '3px',
    backgroundColor: '#DAD7CD',
    position: 'relative',
  };

  const ballStyle = {
    height: '20px',
    width: '20px',
    borderRadius: '50%',
    backgroundColor: '#DAD7CD',
    position: 'absolute',
    bottom: '0',
    left: '-8px',
  };

  const titleStyle = {
    fontFamily: 'Arial',
    color: 'rgba(0, 0, 0, 0.60)',
    fontSize: '2.7rem',
    top: '-55px',
    left: '-30px', 
    width: '500px',
    position: 'absolute',
    cursor: 'pointer',
  }

  return (
    <div style={lineStyle}>
        <div style={titleStyle}>Welcome to Covidify</div>
        <div style={ballStyle}></div>
    </div>
  );
};

export default VerticalLine;