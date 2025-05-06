import React from 'react'
import { useState, useEffect } from 'react'

export default function Characters() {

const [characters, setCharacters] = useState([])
const [filteredCharacters, setFilteredCharacters] = useState([])
const [filter, setFilter] = useState('')
const [loading, setLoading] = useState(true)
const [selectedCharacter, setSelectedCharacter] = useState(null)
const [modalOpen, setModalOpen] = useState(false)

useEffect(() => {
    fetchCharacters()
}, [])

const fetchCharacters = async () => {
    setLoading(true)
    try {
    const response = await fetch('https://thronesapi.com/api/v2/Characters')
    const data = await response.json()
    
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
        (character.fullName && character.fullName.toLowerCase().includes(value)) || 
        (character.title && character.title.toLowerCase().includes(value))
    )
    setFilteredCharacters(filtered)
    }
}

const openCharacterModal = (character) => {
    setSelectedCharacter(character)
    setModalOpen(true)
}

const closeModal = () => {
    setModalOpen(false)
    setTimeout(() => setSelectedCharacter(null), 300)
}

return (
    <div className='mx-10 mt-10'>
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
                return (
                <div 
                    key={character.id} 
                    className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:bg-gray-700 transition-colors cursor-pointer"
                    onClick={() => openCharacterModal(character)}
                >
                    <div className="flex flex-col items-center mb-4">
                        <img 
                            src={character.imageUrl} 
                            alt={character.fullName} 
                            className="w-32 h-32 object-cover rounded-full border-2 border-yellow-500"
                        />
                    </div>
                    <h2 className="text-xl font-bold text-yellow-500 mb-3 text-center">{character.fullName}</h2>
                    {character.title && (
                        <p className="text-gray-300 mb-3 text-center">Título: {character.title}</p>
                    )}
                    <p className="text-gray-300 mb-4 text-center">
                        {character.family && `Casa: ${character.family}`}
                    </p>
                    <div className="text-center">
                        <span className="text-yellow-500 hover:text-yellow-400 transition-colors">
                        Ver detalles →
                        </span>
                    </div>
                </div>
                )
            })}
            </div>
        )}
        </>
    )}

    {/* Modal para mostrar detalles */}
    {selectedCharacter && (
        <div className={`fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 transition-opacity duration-300 ${modalOpen ? 'opacity-100' : 'opacity-0'}`}>
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 max-w-lg w-full max-h-screen overflow-y-auto m-4">
                <div className="flex justify-end">
                    <button 
                        onClick={closeModal}
                        className="text-gray-400 hover:text-yellow-500 transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                
                <div className="flex flex-col items-center mb-6">
                    <img 
                        src={selectedCharacter.imageUrl} 
                        alt={selectedCharacter.fullName} 
                        className="w-48 h-48 object-cover rounded-full border-4 border-yellow-500 mb-4"
                    />
                    <h1 className="text-3xl font-bold text-yellow-500">{selectedCharacter.fullName}</h1>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <div className="mb-4">
                            <span className="text-gray-400 font-medium">Título:</span> {selectedCharacter.title || 'Desconocido'}
                        </div>
                        <div className="mb-4">
                            <span className="text-gray-400 font-medium">Casa:</span> {selectedCharacter.family || 'Desconocido'}
                        </div>
                    </div>
                    
                    <div>
                        <div className="mb-4">
                            <span className="text-gray-400 font-medium">Nombre:</span> {selectedCharacter.firstName || 'Desconocido'}
                        </div>
                        <div className="mb-4">
                            <span className="text-gray-400 font-medium">Apellido:</span> {selectedCharacter.lastName || 'Desconocido'}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )}
    </div>
)
}