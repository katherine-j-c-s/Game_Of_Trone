import React from 'react'
import CategoryCard from '../components/CategoryCard'

export default function Home() {
    return (
      <div className="text-center">
        <h1 className="text-4xl font-bold text-yellow-500 mb-8">Bienvenido al mundo de Hielo y Fuego</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <CategoryCard 
            title="Personajes" 
            description="Explora todos los personajes de Game of Thrones" 
            link="/characters" 
          />
          <CategoryCard 
            title="Casas" 
            description="Descubre las casas nobles de Westeros" 
            link="/houses" 
          />
          <CategoryCard 
            title="Libros" 
            description="Conoce los libros de la saga" 
            link="/books" 
          />
        </div>
      </div>
    )
  }
