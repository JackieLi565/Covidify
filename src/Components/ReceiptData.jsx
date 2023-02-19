import React from "react";
import getListFormat from "../utils/format";
const ReceiptData = (props) => {
    const {data} = props
    const lineStyle = {
        width: '500px',
        height: '1px',
        borderBottom: '1px dashed black',
        marginTop: '5px',
        marginBottom: '5px',
        position: 'relative'
    };

    const header = {
        marginTop: '8px',
        marginBottom: '7px',
        width:'500px',
        height: 'auto',
        display: 'grid',
        gridTemplateColumns: '1fr 2fr 2fr',
        gridGap: '10px',
        position: 'relative'
    }

    const title = {
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        flexDirection: 'column',
    }

    const leftAlignStyle = {
        margin: '0px',
        textAlign: 'left'
    };
    
    const rightAlignStyle = {
        margin: '0px',
        textAlign: 'right'
    };

    const paper = {
        position: 'absolute',
        width: '550px',
        height: '700px',
        left: '-24px',
        borderRadius: '10px'
    }

    const container = {
        position: 'relative',
    }

    const array = getListFormat(data);
    const itemList = array.map((object, index) => {
        let section;
        if(object.left == 'ITEM #' || object.left == 'Summary') {
            section = (  
                <div key={index}>
                    <div style={lineStyle}></div>
                        <div style={header}>
                            <p style={leftAlignStyle}>{object.left}</p>
                            <p style={leftAlignStyle}>{object.middle}</p>
                            <p style={rightAlignStyle}>{object.right}</p>
                        </div>
                    <div style={lineStyle}></div>
                </div>       
            );
        } else {
            section = (
                <div key={index} style={header}>
                    <p style={leftAlignStyle}>{object.left}</p>
                    <p style={leftAlignStyle}>{object.middle}</p>
                    <p style={rightAlignStyle}>{object.right}</p>
                </div>
            );
        }
        return section;
    })

    return(
        <div style={container}>
            <img style={paper} src="../public/assets/Paper.jpg"/>
            <div style={{paddingTop: '10px'}}>
                <div style={title}>
                    <h1 style={{margin: '10px 0px 5px 0px'}}>COVIDIFY</h1>
                    <p style={{margin: '10px 0px 15px 0px'}}>13 March, 2020</p>
                </div>
                {itemList}
            </div> 
        </div>
    );   
}

export default ReceiptData;