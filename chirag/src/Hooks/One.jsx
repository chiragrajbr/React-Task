import React, { useState } from 'react'

function One() {
    let [count,setCount]=useState(1)
  return (
        
    <div>
        <center>
       
      <button onClick={()=>{setCount(count=count+1)}}>+</button>
      {count}
      <button onClick={()=>{setCount(count=count-1)}}>-</button><br></br>
      </center>
    </div>
  )
}

export default One
