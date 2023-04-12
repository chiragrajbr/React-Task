import React from 'react'

function Prop2(props) {
  return (
    <div>
        <h1>{props.hi} task</h1>
      <ul>
        {props.name.map((prop,x)=>{
            return <li key={x}>{prop.id},{prop.name}</li>

        })}
      </ul>
    </div>
  )
}

export default Prop2
