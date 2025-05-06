import React from 'react'
import CategoryCard from '../components/CategoryCard'
import imgenFondo from "../assets/fondoHome.jpg"

export default function Home() {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-cover bg-center" 
        style={{ 
          backgroundImage: `url(${imgenFondo})`,
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(17, 24, 39, 0.85)"
        }}>
        <div className="text-center px-4 py- max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-yellow-500 mb-4 drop-shadow-lg">Bienvenido al mundo de Hielo y Fuego</h1>
          <p className="text-gray-300 mb-10 text-xl max-w-2xl mx-auto">Explora el vasto universo de Game of Thrones: sus personajes legendarios, las nobles casas de Westeros y los libros que narran esta épica historia.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <CategoryCard 
              title="Personajes" 
              description="Explora todos los personajes de Game of Thrones, desde los protagonistas hasta los menos conocidos." 
              link="/characters" 
              imageUrl="/images/characters.jpg"
            />
            <CategoryCard 
              title="Casas" 
              description="Descubre las casas nobles de Westeros, sus lemas, emblemas y miembros juramentados." 
              link="/houses"
              imageUrl="/images/houses.jpg" 
            />
            <CategoryCard 
              title="Libros" 
              description="Conoce los libros de la saga, sus tramas y los personajes que dan vida a estas historias." 
              link="/books"
              imageUrl="/images/books.jpg" 
            />
          </div>
        </div>
      </div>
    )
  }