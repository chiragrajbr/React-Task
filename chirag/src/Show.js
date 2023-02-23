//hideing button
import React, { useState } from 'react'
const Show = (props) => {
    const [toggle,setToggle]=useState(false)
    const value='click hide button to hide this statement'
    const handleClick=()=>{
        setToggle(!toggle)
    }
  return (
    <div>
      
      {
        toggle ?(
        <div>
        <button onClick={handleClick}>hide</button>
        <p style={{color:'red'}}>{value}</p> </div>):
        (<button onClick={handleClick}>show</button>)
        }
    </div>
  )
}
export default Show
