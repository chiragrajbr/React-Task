import React from 'react'

function A2(props) {
   
  return (
    <div>
        <h1> hello {props.name1}</h1>
      <button onClick={()=>{
        props.name(props.name1)
      }}>click</button>
    </div>
  )
}

export default A2
