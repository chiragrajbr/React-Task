import React from 'react'
import { useRef } from 'react'

function One() {
    let btnref=useRef(false)
  return (
    <div>
        <center>
      <input type="checkbox"  onClick={(e)=>{
        btnref.current.disabled=!e.target.checked
      }}/>please accept terms and conditions <br /><br />
      <button  ref={btnref} disabled>login</button>
      </center>
    </div>
  )
}

export default One
