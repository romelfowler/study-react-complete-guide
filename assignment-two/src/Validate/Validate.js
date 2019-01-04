import React from 'react';
 
const Validation = (props) =>  {
    let validMsg = "text long enough";

    if (props.inputLength <= 5) {
        validMsg = "Text too short";
    }
        return(
        <div>
            <p>{validMsg}</p>
        </div>
        )
}


export default Validation; 