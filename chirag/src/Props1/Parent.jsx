import React from 'react'
import Child from './Child'

function Parent() {
    let a="parent component"
  function recive (b){
    alert (b)
  }
  return (
    <div>
      <Child name={a} name1={recive}/>    
      </div>
  )
}

export default Parent
