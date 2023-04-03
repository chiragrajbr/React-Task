import React from 'react'

const Key = () => {
   // let names=["chirag","darshu","muni","chirag"]
    let boys=[{id:"chirag"},{id:"muni"},{id:"muni"}]
  return (
    <div>
     {/*{names.map((names,i)=>{
        return <li key={i}>{names}</li>
      })}*/}

      {boys.map((boys,i)=>{
        return <li key={i}>{boys.id}</li>
      })}
      


    </div>
  )
}

export default Key
