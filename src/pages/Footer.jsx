import React from 'react'

export default function Footer() {
    return (
      <footer className="bg-gray-800 py-6 border-t border-gray-700 mt-auto">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>Creado con la API de Ice and Fire</p>
          <div className="mt-2 flex justify-center items-center">
            <a 
              href="https://www.anapioficeandfire.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-yellow-500 hover:text-yellow-400 transition-colors flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
              </svg>
              www.anapioficeandfire.com
            </a>
          </div>
        </div>
      </footer>
    )
}