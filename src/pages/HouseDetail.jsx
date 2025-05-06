import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import InfoItem from '../components/InfoItem'

export default function HouseDetail() {
    const { id } = useParams()
    const [house, setHouse] = useState(null)
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()
  
    useEffect(() => {
      fetchHouse()
    }, [id])
  
    const fetchHouse = async () => {
      setLoading(true)
      try {
        const response = await fetch(`https://www.anapioficeandfire.com/api/houses/${id}`)
        const data = await response.json()
        setHouse(data)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching house:', error)
        setLoading(false)
      }
    }
  
    const goBack = () => {
      navigate(-1)
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
  
    if (!house) {
      return <div className="text-center py-8">No se encontró la casa</div>
    }
  
    return (
      <div>
        <button 
          onClick={goBack} 
          className="mb-6 flex items-center text-yellow-500 hover:text-yellow-400 transition-colors"
        >
          ← Volver
        </button>
        
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
          <h1 className="text-3xl font-bold text-yellow-500 mb-2">{house.name}</h1>
          
          {house.words && (
            <p className="text-gray-300 mb-6 text-xl italic">"{house.words}"</p>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <InfoItem label="Región" value={house.region} />
              <InfoItem label="Asentamiento" value={house.seat} />
              <InfoItem label="Año de fundación" value={house.founded} />
              <InfoItem label="Fundador" value={house.founder ? "Ver fundador" : "Desconocido"} link={house.founder} />
              <InfoItem label="Señor actual" value={house.currentLord ? "Ver señor actual" : "Desconocido"} link={house.currentLord} />
            </div>
            
            <div>
              <InfoItem label="Heredero" value={house.heir ? "Ver heredero" : "Desconocido"} link={house.heir} />
              <InfoItem label="Blasón" value={house.coatOfArms} />
              <InfoItem label="Lema" value={house.words} />
              <InfoItem label="Títulos" value={house.titles.join(', ')} />
              <InfoItem label="Armas ancestrales" value={house.ancestralWeapons.join(', ')} />
            </div>
          </div>
          
          {house.swornMembers && house.swornMembers.length > 0 && (
            <div className="mt-6">
              <h2 className="text-xl font-bold text-yellow-500 mb-4">Miembros juramentados</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {house.swornMembers.slice(0, 9).map(memberUrl => {
                  const memberId = getIdFromUrl(memberUrl)
                  return (
                    <Link 
                      key={memberId}
                      to={`/characters/${memberId}`}
                      className="bg-gray-700 text-yellow-500 hover:bg-gray-600 transition-colors p-2 rounded text-center"
                    >
                      Ver miembro
                    </Link>
                  )
                })}
                {house.swornMembers.length > 9 && (
                  <div className="bg-gray-700 p-2 rounded text-center text-gray-400">
                    +{house.swornMembers.length - 9} más
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
