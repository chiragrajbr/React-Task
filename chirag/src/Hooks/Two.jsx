import React,{useState} from "react";

const Two=()=>{
    let [msg,setMsg]=useState()
    let name_handler=()=>{
        setMsg("message was viewd")
    }
    /*let gn_handler=()=>{
        setMsg("good night")
    }*/
    return (
        <div>
            <center>
            <p>{msg}</p><br></br>
            <button onClick={name_handler}>view</button><br />
            <button onClick={()=>{setMsg(" ")}}>hide</button>
            </center>
        </div>
    )
}
export default Two