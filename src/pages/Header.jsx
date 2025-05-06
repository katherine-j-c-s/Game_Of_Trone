import React from 'react'
import NavLink from '../components/NavLink'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header className="bg-gray-800 shadow-md">
          <div className="container mx-auto px-4">
            <nav className="flex items-center justify-between py-6">
              <Link to="/" className="text-2xl font-bold text-yellow-500 hover:text-yellow-400 transition-colors">
                Game of Thrones
              </Link>
              <div className="flex space-x-6">
                <NavLink to="/characters">Personajes</NavLink>
                <NavLink to="/houses">Casas</NavLink>
                <NavLink to="/books">Libros</NavLink>
              </div>
            </nav>
          </div>
        </header>    
  )
}
