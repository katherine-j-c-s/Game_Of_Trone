import React from 'react'

export default function Footer() {
    return (
      <footer className="bg-gray-800 py-6 mt-12">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>Creado con la API de Ice and Fire</p>
          <p className="mt-2">
            <a 
              href="https://www.anapioficeandfire.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-yellow-500 hover:text-yellow-400 transition-colors"
            >
              www.anapioficeandfire.com
            </a>
          </p>
        </div>
      </footer>
    )
}