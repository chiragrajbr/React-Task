import React from 'react'

function User2(props) {
  return (
    <div>
    <p>{props.academy.id}</p>
    <p>{props.academy.name}</p>

    <p>{props.names.map((ele)=>{
        return <li>{ele}</li>
    })}</p>
    
    </div>
  )
}

export default User2
