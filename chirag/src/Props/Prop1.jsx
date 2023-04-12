//filter value and pass as props
import React from 'react'
import Prop2 from './Prop2'
function Prop1() {
    const a=[{id:1,name:"darshu",complete:true},{id:2,name:"darshu",complete:true},{id:3,name:"darshu",complete:false}]
    let b=a.filter((x)=>{
        return x.complete
    })

    let c=a.filter((y)=>{
        return !y.complete
    })
  return (
    <div>
   
      <Prop2 name={a} hi="all" />
      
      <Prop2 name={b} hi="completed" />


      <Prop2 name={c} hi="incompleted"/>
    </div>
  )
}

export default Prop1
