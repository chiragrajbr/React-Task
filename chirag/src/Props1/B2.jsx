import React from 'react'

function B2(props) {
    console.log(props.user.length)
  return (
   <div>{
       props.user.length>0?
      <table className='table '>
        <thead>
        
            <th>id</th>
            <th>name</th>
            
            </thead>
            <tbody>
        
        
       {props.user.map((ele,x)=>{
            return  <tr key={x}> <td>{ele.id}</td> 
                                 <td>{ele.name}</td>
             </tr>
        })}
      </tbody>
        
      </table>:<p>cart is empty</p>
}
    </div>
  )
}

export default B2
