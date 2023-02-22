import React from "react";
import ReceiptData from "./ReceiptData";
import HorizontalLine from "./HorizontalDiv";
const Receipt = ({child, tog, date}) => {
    const container = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
    return(
        <div style={container}>
            <button className='toggleBTN' onClick={() => tog(false)}>New Receipt</button>
            <HorizontalLine />
            <ReceiptData subHead={date} data={child}/>
        </div>
    );
}

export default Receipt;