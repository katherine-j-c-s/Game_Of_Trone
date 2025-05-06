import React from 'react'
import { Link } from 'react-router-dom'

export default function NavLink({to,children}) {
    return (
        <Link 
          to={to} 
          className="text-gray-300 hover:text-yellow-500 transition-colors font-medium"
        >
          {children}
        </Link>
      )
}
