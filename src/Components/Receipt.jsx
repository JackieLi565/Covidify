import React from "react";
import ReceiptData from "./ReceiptData";
import HorizontalLine from "./HorizontalDiv";
const Receipt = (props) => {
    const {child, tog} = props;
    const container = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
    return(
        <div style={container}>
            <button className='toggleBTN' onClick={tog}>New Receipt</button>
            <HorizontalLine />
            <ReceiptData data={child}/>
        </div>
    );
}

export default Receipt;