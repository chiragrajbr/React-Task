import React from "react"
let fruits=()=>{
let fru=["apple","grapes","mango"]
let result =[ ]

//for loop
/*for(let i=0;i<fru.length;i++){
result.push(<li>{fru[i]}</li>)
}*/


//for each
/*fru.forEach((fru)=>{
    result.push(<li>{fru}</li>)
})*/

fru.map((fru)=>{
    result.push(<li>{fru}</li>)
    return result
})
return (
    <div>
       <p>{result}</p>
    </div>
)
}
export default fruits