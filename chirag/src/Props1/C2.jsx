import React from 'react'

const C2 = (props) => {
     let trueBlock=<p> cart is not empty</p>
   let  falseBlock=<p> cart is empty</p>
  return (
    <div>
      {
        props.user.length>0 ? trueBlock   :falseBlock
      }
    </div>
  )
}

export default C2
