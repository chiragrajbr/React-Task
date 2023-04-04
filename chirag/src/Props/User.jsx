import React from 'react'
import User2 from './User2'

function User() {
 let a={
  id:101,
  name:"chirag"
 }
 let b=["chirag","darshu","manju"]
  return (
    <div>
      <User2  academy={a} names={b} />
    
    </div>
  )
}

export default User
