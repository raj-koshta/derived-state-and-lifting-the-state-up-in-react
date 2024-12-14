import React, { useState } from 'react'

const LiftingState = () => {

    // lifting the input state to child state so the siblings can also use it
    const [inputValue, setInputValue] = useState("");
    return (
        <div className="card">
            <InputComponenet inputValue={inputValue} setInputValue={setInputValue} />
            <DisplayComponenet inputValue={inputValue} />
            <br />
            <hr />
            <p>
                Derived State Example
            </p>
        </div>
    )
}

const InputComponenet = ({ inputValue, setInputValue }) => {

    // const [inputValue, setInputValue] = useState("");

    return <>
        <input type='text' value={inputValue} placeholder='write your name'
            onChange={(e) => {
                setInputValue(e.target.value);
            }} />
    </>
}

const DisplayComponenet = ({ inputValue }) => {
    return <p>The current input value is: {inputValue} </p>
}


export default LiftingState