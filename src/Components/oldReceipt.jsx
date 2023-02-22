import React from "react";

function OldReceipts({id, pt, date, handleClick}) {

    return ( 
        <div onClick={() => handleClick(id, pt, date)}>
            Receipt: {`${date}, ${pt}`}
        </div>
    );
}

export default OldReceipts;