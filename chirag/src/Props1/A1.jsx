//child to parent
import React from 'react'
import A2 from './A2'

function A1() {

    let d="darshu"
    let e="muni"
     function parent(x){
        alert(`  hello ${x}`)
     }
  return (
    <div>
      <A2  name1={d} name={parent} />
      <A2  name1={e} name={parent} />
    </div>
  )
}

export default A1
