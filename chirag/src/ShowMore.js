import { useState } from "react";
const ShowMore=(props)=>{
    const value =['rose1','rose2','rose3','rose4','rose5','rose6','rose7','rose8','rose9']
    const num=2
    const [enter,setEnter]=useState(num)

    const handleClick=()=>{
        setEnter(enter+2)
    }
    return(
        <div>
            <center>
            {value.length>0 && value.slice(0,enter).map((ele,i)=>{
                return <li key={i}>{ele}</li>
            })}
            <button onClick={handleClick}>click here</button>
            </center>
        </div>
    )
}
export default ShowMore