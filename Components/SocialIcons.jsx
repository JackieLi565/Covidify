import React from 'react';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faInstagram } from '@fortawesome/free-solid-svg-icons'

const IconBar = () => {
  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100px',
  };

  const divStyle = {
    height: '50px',
    width: '50px',
    backgroundColor: 'gray',
    margin: '0 10px',
  };

  const dividerStyle = {
    height: '40px',
    width: '1px',
    backgroundColor: 'white',
    margin: '0 20px',
  };

  return (
    <div style={containerStyle}>
      {/* <FontAwesomeIcon icon={faInstagram} /> */}
      <div style={dividerStyle}></div>
      <div style={divStyle}></div>
      <div style={dividerStyle}></div>
      <div style={divStyle}></div>
      <div style={dividerStyle}></div>
      <div style={divStyle}></div>
    </div>
  );
};

export default IconBar;