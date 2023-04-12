//iterating and pushing to table
import React from 'react'
import B2 from './B2'

function B1() {
  let user=[{id:101,name:"iphone"},{id:102,name:"oppo"},{id:103,name:"realme"}]
  return (
    <div>
      <B2 user={user} />
    </div>
  )
}

export default B1
