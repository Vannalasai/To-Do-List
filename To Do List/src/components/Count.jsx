import React from "react";

function Count ({itemCount}) {

    return(
        <div style={{marginBottom: "10px"}}>
          Pending Items Count - {itemCount}
        </div>
    )
}

export default Count;