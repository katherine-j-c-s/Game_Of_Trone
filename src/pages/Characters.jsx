import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Characters() {

const [characters, setCharacters] = useState([])
const [filteredCharacters, setFilteredCharacters] = useState([])
const [filter, setFilter] = useState('')
const [loading, setLoading] = useState(true)
const [page, setPage] = useState(1)
const [maxPage, setMaxPage] = useState(1)

useEffect(() => {
    fetchCharacters(page)
}, [page])

const fetchCharacters = async (pageNum) => {
    setLoading(true)
    try {
    const response = await fetch(`https://www.anapioficeandfire.com/api/characters?page=${pageNum}&pageSize=10`)
    const data = await response.json()
    
    // Extract the last page number from Link header
    const linkHeader = response.headers.get('Link')
    if (linkHeader) {
        const lastPageMatch = linkHeader.match(/page=(\d+).*?rel="last"/)
        if (lastPageMatch && lastPageMatch[1]) {
        setMaxPage(parseInt(lastPageMatch[1]))
        }
    }
    
    setCharacters(data)
    setFilteredCharacters(data)
    setLoading(false)
    } catch (error) {
    console.error('Error fetching characters:', error)
    setLoading(false)
    }
}

const handleFilterChange = (e) => {
    const value = e.target.value.toLowerCase()
    setFilter(value)
    
    if (value === '') {
    setFilteredCharacters(characters)
    } else {
    const filtered = characters.filter(character => 
        (character.name && character.name.toLowerCase().includes(value)) || 
        (character.aliases && character.aliases[0] && character.aliases[0].toLowerCase().includes(value))
    )
    setFilteredCharacters(filtered)
    }
}

const handlePreviousPage = () => {
    if (page > 1) {
    setPage(page - 1)
    }
}

const handleNextPage = () => {
    if (page < maxPage) {
    setPage(page + 1)
    }
}

// Extraer ID del URL
const getIdFromUrl = (url) => {
    const parts = url.split('/')
    return parts[parts.length - 1]
}

return (
    <div>
    <h1 className="text-3xl font-bold text-yellow-500 mb-6">Personajes</h1>
    
    <div className="mb-6">
        <input
        type="text"
        placeholder="Buscar personajes..."
        className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-gray-100 focus:outline-none focus:border-yellow-500"
        value={filter}
        onChange={handleFilterChange}
        />
    </div>
    
    {loading ? (
        <div className="flex justify-center my-12">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-500"></div>
        </div>
    ) : (
        <>
        {filteredCharacters.length === 0 ? (
            <p className="text-center py-8 text-gray-400">No se encontraron personajes con ese criterio</p>
        ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCharacters.map(character => {
                const characterId = getIdFromUrl(character.url)
                const displayName = character.name || character.aliases[0] || 'Personaje desconocido'
                
                return (
                <div key={characterId} className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:bg-gray-700 transition-colors">
                    <h2 className="text-xl font-bold text-yellow-500 mb-3">{displayName}</h2>
                    {character.aliases && character.aliases[0] && character.name && (
                    <p className="text-gray-300 mb-3">Alias: {character.aliases[0]}</p>
                    )}
                    <p className="text-gray-300 mb-4">
                    {character.gender && `Género: ${character.gender}`}
                    </p>
                    <Link 
                    to={`/characters/${characterId}`} 
                    className="text-yellow-500 hover:text-yellow-400 transition-colors"
                    >
                    Ver detalles →
                    </Link>
                </div>
                )
            })}
            </div>
        )}
        
        <div className="flex justify-between items-center mt-8">
            <button
            onClick={handlePreviousPage}
            disabled={page === 1}
            className={`px-4 py-2 rounded-lg ${page === 1 ? 'bg-gray-700 text-gray-500 cursor-not-allowed' : 'bg-gray-700 text-yellow-500 hover:bg-gray-600'}`}
            >
            Anterior
            </button>
            <span className="text-gray-300">Página {page} de {maxPage}</span>
            <button
            onClick={handleNextPage}
            disabled={page === maxPage}
            className={`px-4 py-2 rounded-lg ${page === maxPage ? 'bg-gray-700 text-gray-500 cursor-not-allowed' : 'bg-gray-700 text-yellow-500 hover:bg-gray-600'}`}
            >
            Siguiente
            </button>
        </div>
        </>
    )}
    </div>
)
}
