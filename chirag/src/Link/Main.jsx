import React from 'react'
import {Link} from "react-router-dom"
function Main() {
  return (
    <div>
       <nav className='navbar navbar-expand-lg bg-dark'>
      <div className='navbar-brand text-white'> Navbar</div>
      <div className='ml-auto'>
        <ul className='navbar-nav text-white'>
          <li className='nav-link'><Link  to="/First"> First</Link></li>
          <li className='nav-link'><Link  to="/Second">Second</Link></li>
          

        </ul>

        
      </div>

    </nav>
    </div>
  )
}

export default Main
