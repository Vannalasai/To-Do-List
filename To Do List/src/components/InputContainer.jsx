import React, { useState } from 'react';

function InputContainer ({addNewTodo}) {

    const [inputValue, setCurrentValue] = useState("");

    return(
        <div style={{display: "flex", justifyContent: "center"}}>
            <input 
            placeholder='add an item'  
            value={inputValue} 
            onChange={(e) => setCurrentValue(e.currentTarget.value)}/>
            <button 
            className='add' 
            onClick={()=> {addNewTodo(inputValue); setCurrentValue("")}}>
                Add
            </button>
        </div>
    )
}

export default InputContainer;