import React ,{useState} from 'react'
const Disable=(props)=>{
    const [text,setText]=useState('')
    const [value,setValue]=useState('')
    const handleClick=()=>{
        setValue(text)
    }
    return(
        <div>
            <center>
            <input type="text" value={text} onChange={(e)=>{setText(e.target.value)}} />
            <h1>{value}</h1>
            <button onClick={handleClick} disabled={text.length===0}>submit</button>
            </center>
        </div>
    )
}
export default Disable