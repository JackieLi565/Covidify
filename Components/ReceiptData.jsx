import React from "react";
const ReceiptData = (pros) => {
    const title = 'Covid-19';
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
        left: '-24px',
        borderRadius: '10px'
    }

    const container = {
        position: 'relative',
    }

    //refractor into array
    return(
        <div style={container}>
            <img style={paper} src="../public/Images/CovidifyReceiptPaper.jpg"/>
            <div style={{paddingTop: '120px'}}>
            <div style={lineStyle}></div>
            <div style={header}>
                <p style={leftAlignStyle}>ITEM#</p>
                <p style={leftAlignStyle}>Covid-19</p>
                <p style={rightAlignStyle}>Amount</p>
            </div>
            <div style={lineStyle}></div>

            <div style={header}>
                <p style={leftAlignStyle}>01</p>
                <p style={leftAlignStyle}>Cases</p>
                <p style={rightAlignStyle}>150</p>
            </div>
            <div style={header}>
                <p style={leftAlignStyle}>02</p>
                <p style={leftAlignStyle}>Tests-Completed</p>
                <p style={rightAlignStyle}></p>
            </div>
            <div style={header}>
                <p style={leftAlignStyle}>03</p>
                <p style={leftAlignStyle}>Deaths</p>
                <p style={rightAlignStyle}></p>
            </div>
            <div style={header}>
                <p style={leftAlignStyle}>04</p>
                <p style={leftAlignStyle}>Hosplitalizations</p>
                <p style={rightAlignStyle}></p>
            </div>
            <div style={header}>
                <p style={leftAlignStyle}>05</p>
                <p style={leftAlignStyle}>ICU</p>
                <p style={rightAlignStyle}></p>
            </div>

            <div style={lineStyle}></div>
            <div style={header}>
                <p style={leftAlignStyle}>ITEM#</p>
                <p style={leftAlignStyle}>Vaccine Coverage</p>
                <p style={rightAlignStyle}>%</p>
            </div>
            <div style={lineStyle}></div>

            <div style={header}>
                <p style={leftAlignStyle}>SC</p>
                <p style={leftAlignStyle}>Vaccination Dose 1</p>
                <p style={rightAlignStyle}>150</p>
            </div>
            <div style={header}>
                <p style={leftAlignStyle}>BT</p>
                <p style={leftAlignStyle}>Vaccination Dose 2</p>
                <p style={rightAlignStyle}></p>
            </div>
            <div style={header}>
                <p style={leftAlignStyle}>C2</p>
                <p style={leftAlignStyle}>Vaccination Dose 3</p>
                <p style={rightAlignStyle}></p>
            </div>
            <div style={header}>
                <p style={leftAlignStyle}>MR</p>
                <p style={leftAlignStyle}>Vaccination Dose 4</p>
                <p style={rightAlignStyle}></p>
            </div>

            <div style={lineStyle}></div>
            <div style={header}>
                <p style={leftAlignStyle}>ITEM #</p>
                <p style={leftAlignStyle}>Vaccine Administration</p>
                <p style={rightAlignStyle}>Amount</p>
            </div>
            <div style={lineStyle}></div>
            <div style={header}>
                <p style={leftAlignStyle}>SC.1</p>
                <p style={leftAlignStyle}>Vaccination Dose 1</p>
                <p style={rightAlignStyle}>150</p>
            </div>
            <div style={header}>
                <p style={leftAlignStyle}>BT.3</p>
                <p style={leftAlignStyle}>Vaccination Dose 2</p>
                <p style={rightAlignStyle}></p>
            </div>
            <div style={header}>
                <p style={leftAlignStyle}>C2.B</p>
                <p style={leftAlignStyle}>Vaccination Dose 3</p>
                <p style={rightAlignStyle}></p>
            </div>
            <div style={header}>
                <p style={leftAlignStyle}>MR.A</p>
                <p style={leftAlignStyle}>Vaccination Dose 4</p>
                <p style={rightAlignStyle}></p>
            </div>
            </div> 
        </div>
    );   
}

export default ReceiptData;