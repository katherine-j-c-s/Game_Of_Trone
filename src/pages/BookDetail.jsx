import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import InfoItem from '../components/InfoItem'

export default function BookDetail() {
    const { id } = useParams()
    const [book, setBook] = useState(null)
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()
  
    // Efecto para cargar el detalle del libro
    useEffect(() => {
      fetchBook()
    }, [id])
  
    const fetchBook = async () => {
      setLoading(true)
      try {
        const response = await fetch(`https://www.anapioficeandfire.com/api/books/${id}`)
        const data = await response.json()
        setBook(data)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching book:', error)
        setLoading(false)
      }
    }
  
    const goBack = () => {
      navigate(-1)
    }
  
    // Formatear fecha
    const formatDate = (dateString) => {
      const date = new Date(dateString)
      return date.toLocaleDateString()
    }
  
    // Extraer ID del URL
    const getIdFromUrl = (url) => {
      if (!url) return null
      const parts = url.split('/')
      return parts[parts.length - 1]
    }
  
    if (loading) {
      return (
        <div className="flex justify-center my-12">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-500"></div>
        </div>
      )
    }
  
    if (!book) {
      return <div className="text-center py-8">No se encontró el libro</div>
    }
  
    return (
      <div className='mx-10 mt-10'>
        <button 
          onClick={goBack} 
          className="mb-6 flex items-center text-yellow-500 hover:text-yellow-400 transition-colors"
        >
          ← Volver
        </button>
        
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
          <h1 className="text-3xl font-bold text-yellow-500 mb-2">{book.name}</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <InfoItem label="Autor" value={book.authors.join(', ')} />
              <InfoItem label="Editorial" value={book.publisher} />
              <InfoItem label="ISBN" value={book.isbn} />
              <InfoItem label="Número de páginas" value={book.numberOfPages} />
            </div>
            
            <div>
              <InfoItem label="Publicado" value={formatDate(book.released)} />
              <InfoItem label="País" value={book.country} />
              <InfoItem label="Tipo" value={book.mediaType} />
            </div>
          </div>
          
          {book.characters && book.characters.length > 0 && (
            <div className="mt-6">
              <h2 className="text-xl font-bold text-yellow-500 mb-4">Personajes</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {book.characters.slice(0, 12).map(characterUrl => {
                  const characterId = getIdFromUrl(characterUrl)
                  return (
                    <Link 
                      key={characterId}
                      to={`/characters/${characterId}`}
                      className="bg-gray-700 text-yellow-500 hover:bg-gray-600 transition-colors p-2 rounded text-center"
                    >
                      Ver personaje
                    </Link>
                  )
                })}
                {book.characters.length > 12 && (
                  <div className="bg-gray-700 p-2 rounded text-center text-gray-400">
                    +{book.characters.length - 12} más
                  </div>
                )}
              </div>
            </div>
          )}
          
          {book.povCharacters && book.povCharacters.length > 0 && (
            <div className="mt-6">
              <h2 className="text-xl font-bold text-yellow-500 mb-4">Personajes POV</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {book.povCharacters.map(characterUrl => {
                  const characterId = getIdFromUrl(characterUrl)
                  return (
                    <Link 
                      key={characterId}
                      to={`/characters/${characterId}`}
                      className="bg-yellow-800 text-yellow-300 hover:bg-yellow-700 transition-colors p-2 rounded text-center"
                    >
                      Ver POV
                    </Link>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    )
}