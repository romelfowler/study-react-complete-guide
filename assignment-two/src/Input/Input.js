import React from 'react';

const InputList = (props) => {
    return(
        <div className="inputList">
        <h1>this is an input</h1>
        <input onChange={props.changed} value={props.name}/>
        </div>
    )
}


export default InputList;