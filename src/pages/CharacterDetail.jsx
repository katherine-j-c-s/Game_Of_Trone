import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import InfoItem from '../components/InfoItem'

export default function CharacterDetail() {

const { id } = useParams()
const [character, setCharacter] = useState(null)
const [loading, setLoading] = useState(true)
const navigate = useNavigate()

useEffect(() => {
    fetchCharacter()
}, [id])

const fetchCharacter = async () => {
    setLoading(true)
    try {
    const response = await fetch(`https://thronesapi.com/api/v2/Characters/${id}`)
    const data = await response.json()
    setCharacter(data)
    setLoading(false)
    } catch (error) {
    console.error('Error fetching character:', error)
    setLoading(false)
    }
}

const goBack = () => {
    navigate(-1)
}

if (loading) {
    return (
    <div className="flex justify-center my-12">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-500"></div>
    </div>
    )
}

if (!character) {
    return <div className="text-center py-8">No se encontró el personaje</div>
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
        <div className="flex flex-col items-center mb-6">
            <img 
                src={character.imageUrl} 
                alt={character.fullName} 
                className="w-48 h-48 object-cover rounded-full border-4 border-yellow-500 mb-4"
            />
            <h1 className="text-3xl font-bold text-yellow-500">{character.fullName}</h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
            <InfoItem label="Título" value={character.title} />
            <InfoItem label="Casa" value={character.family} />
        </div>
        
        <div>
            <InfoItem label="Nombre" value={character.firstName} />
            <InfoItem label="Apellido" value={character.lastName} />
        </div>
        </div>
    </div>
    </div>
)
}