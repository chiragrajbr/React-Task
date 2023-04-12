import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Axios = () => {
  const [users,setUsers]=useState([ ])
  useEffect(()=>{
    axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res)=>{
      const result =res.data
      setUsers(result)
    })
    .catch((error)=>{
      alert(error.message)
    })
  })
  return (
    <div>
      {console.log(users)}
      <h1>user list-{users.length}</h1>
      <ul>
        {users.map((user)=>{
          return <li key={user.id}>{user.name}</li>
        })}
      </ul>
    </div>
  )
}

export default Axios
