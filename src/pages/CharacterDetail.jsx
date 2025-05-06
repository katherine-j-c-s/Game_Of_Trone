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
    const response = await fetch(`https://www.anapioficeandfire.com/api/characters/${id}`)
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

const displayName = character.name || character.aliases[0] || 'Personaje desconocido'

return (
    <div>
    <button 
        onClick={goBack} 
        className="mb-6 flex items-center text-yellow-500 hover:text-yellow-400 transition-colors"
    >
        ← Volver
    </button>
    
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
        <h1 className="text-3xl font-bold text-yellow-500 mb-6">{displayName}</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
            <InfoItem label="Alias" value={character.aliases.join(', ')} />
            <InfoItem label="Género" value={character.gender} />
            <InfoItem label="Cultura" value={character.culture} />
            <InfoItem label="Nacimiento" value={character.born} />
            <InfoItem label="Muerte" value={character.died} />
        </div>
        
        <div>
            <InfoItem label="Títulos" value={character.titles.join(', ')} />
            <InfoItem label="Apodos" value={character.aliases.join(', ')} />
            <InfoItem label="Padre" value={character.father ? "Ver padre" : "Desconocido"} link={character.father} />
            <InfoItem label="Madre" value={character.mother ? "Ver madre" : "Desconocido"} link={character.mother} />
            <InfoItem label="Cónyuge" value={character.spouse ? "Ver cónyuge" : "Desconocido"} link={character.spouse} />
        </div>
        </div>
    </div>
    </div>
)
}