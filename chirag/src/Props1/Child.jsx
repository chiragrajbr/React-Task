import React from 'react'

function Child(props) {
  return (
    <div>
        <h2>child component</h2>
      <button onClick={()=>{
        return props.name1("child class executing parent function")
      }}>click</button>
    </div>
  )
}

export default Child
