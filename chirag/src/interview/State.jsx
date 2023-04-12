//usestate
import React, { useState } from 'react'

function State() {
    let [count,setcount]=useState(1)
    let minus=()=>{
        setcount(count=count-1)
    }
  return (
    <div>
      <p>{count}</p>
     {/* <button onClick={()=>{setcount(count=count+1)}}>+</button> */}
     <button onClick={minus}>-</button>
    </div>
  )
}

export default State
