import React from 'react'
import { Link } from 'react-router-dom'

export default function CategoryCard({ title, description, link }) {
    return (
      <Link to={link} className="block">
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:bg-gray-700 transition-colors hover:border-yellow-500">
          <h2 className="text-2xl font-bold text-yellow-500 mb-3">{title}</h2>
          <p className="text-gray-300 mb-4">{description}</p>
          <span className="text-yellow-500 font-medium">Explorar →</span>
        </div>
      </Link>
    )
  }