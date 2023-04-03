//iterating array of object
import React from 'react'

const Two = () => {
    let users=[{user:"user1"},{user:"user2"},{user:"user3"}]
    
  return (
    <div>
      {
      users.map((user)=>{
        return <li>{user.user}</li>
      })
      }
    </div>
  )
}

export default Two
