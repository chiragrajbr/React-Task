import React, { useState } from 'react'

function Two() {
    let[able,setAble]=useState(false)

  return (
    <div>
        <center>
      <input type="checkbox" onClick={(e)=>{
        setAble(e.target.checked)
      }} />accept terms and condition <br />
      <button disabled={!able}>submit</button>
      </center>
    </div>
  )
}

export default Two
