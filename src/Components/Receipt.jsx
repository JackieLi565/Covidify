import React from "react";
import ReceiptData from "./ReceiptData";
const Receipt = (props) => {
    const {child, decision} = props;
    const container = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
    return(
        <div style={container}>
            <ReceiptData data={child}/>
        </div>
    );
}

export default Receipt;