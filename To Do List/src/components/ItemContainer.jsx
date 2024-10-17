import React from "react";

function ItemContainer ({todos, deleteTodo}) {

    return(
        <div style={{display: "flex", justifyContent: "center"}}>
            <ul>
                {todos.map((item, index) => {
                    return(
                        <li key={index} style={{marginTop: "10px"}}>
                            {item}
                            <button 
                            className="delete" 
                            style={{marginLeft: "15px"}} 
                            onClick={()=>deleteTodo(item)}>
                                Delete
                            </button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default ItemContainer;