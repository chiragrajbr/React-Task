import axios from 'axios'
import React, {  useState } from 'react'


function Login1() {
   const[username,setUsername]=useState("")
   const[email,setEmail]=useState("")
   const[password ,setPassword]=useState("")
   const SubmitData=async(e)=>{
   e.preventDefault();
   await axios({
    url:"http://localhost:8080/insert",
    method:"POST",
    data:{
        email:email,
        username:username,
        password:password
    }
   }).then(res=>{console.log(res)})
   .catch(err=>{console.log(err)})
    
    
   }

  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4 mt-5">
                    <form onSubmit={SubmitData}>
                <div className="form" >
                    <div className='form-group'>
                        <label >email :</label>
                        <input className='form-control' type="text"  value={email} onChange={(e)=>{setEmail(e.target.value)}} /> <br />
                    </div>
                    <div className='form-group'>
                    <label  >username :</label>
                    <input className='form-control' type="text" value={username} onChange={(e)=>{setUsername(e.target.value)}} /><br />
                     </div>
                     <div className='form-group'>
                     <label >password :</label>
                     <input className='form-control' type="number" value={password} onChange={(e)=>{setPassword(e.target.value)}} /><br />
                     </div>
                    <div className="row">
                        <div className="col-4">
                            
                        </div>
                        <div className="col">
                        <button className='btn btn-primary'>sign up</button>
                        </div>
                        
                    </div>
                </div>
                </form>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Login1