import React from 'react'

function Filter({setF}) {
    return (
        <div style={{display:'flex',justifyContent:'center', margin:'20px'}}>
            <button onClick={()=>{setF("All")}} >All</button>
            <button onClick={()=>{setF ("Done")}}>Done</button>
            <button onClick={()=>{setF ("UNDone")}}>UNDone</button>
        </div>
    )
}

export default Filter
