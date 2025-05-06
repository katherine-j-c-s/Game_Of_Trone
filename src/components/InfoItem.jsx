import React from 'react'
import { Link } from 'react-router-dom'

export default function InfoItem({ label, value, link }) {
  // Extraer ID del URL
  const getIdFromUrl = (url) => {
    if (!url) return null
    const parts = url.split('/')
    return parts[parts.length - 1]
  }

  if (!value || value === '' || value === 'Desconocido') {
    return (
      <div className="mb-4">
        <span className="text-gray-400 font-medium">{label}:</span> <span className="text-gray-500">Desconocido</span>
      </div>
    )
  }

  if (link) {
    const id = getIdFromUrl(link)
    const basePath = link.includes('/characters/') ? '/characters/' : 
                     link.includes('/houses/') ? '/houses/' : 
                     link.includes('/books/') ? '/books/' : '/'
    
    return (
      <div className="mb-4">
        <span className="text-gray-400 font-medium">{label}:</span>{' '}
        <Link to={`${basePath}${id}`} className="text-yellow-500 hover:text-yellow-400 transition-colors">
          {value}
        </Link>
      </div>
    )
  }

  return (
    <div className="mb-4">
      <span className="text-gray-400 font-medium">{label}:</span> {value}
    </div>
  )
}
