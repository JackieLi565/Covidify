import React from 'react';
import {InstagramOutlined, MailOutlined, GithubOutlined, WechatOutlined} from '@ant-design/icons'
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

  const iconStyle = {
    color: 'white',
    fontSize: '2.3rem',
    cursor:'pointer'
  }

  return (
    <div style={containerStyle}>
      <InstagramOutlined style={iconStyle} />
      <div style={dividerStyle}></div>
      <WechatOutlined  style={iconStyle}/>
      <div style={dividerStyle}></div>
      <GithubOutlined style={iconStyle} />
      <div style={dividerStyle}></div>
      <MailOutlined style={iconStyle} />
    </div>
  );
};

export default IconBar;