import React from 'react'
import {Link} from "react-router-dom"

const NotFound = () => {
  return (
      <div>
        <li>
          <Link to='/'>Home</Link>
          <Link to='/login'>Login</Link>
        </li>
        <p>404, sorry, page not found!</p>
      </div>
  )
}

export default NotFound
