import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Books() {

    const [books, setBooks] = useState([])
    const [filteredBooks, setFilteredBooks] = useState([])
    const [filter, setFilter] = useState('')
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [maxPage, setMaxPage] = useState(1)

    useEffect(() => {
        fetchBooks(page)
    }, [page])

    const fetchBooks = async (pageNum) => {
        setLoading(true)
        try {
        const response = await fetch(`https://www.anapioficeandfire.com/api/books?page=${pageNum}&pageSize=12`)
        const data = await response.json()
        
        // Extract the last page number from Link header
        const linkHeader = response.headers.get('Link')
        if (linkHeader) {
            const lastPageMatch = linkHeader.match(/page=(\d+).*?rel="last"/)
            if (lastPageMatch && lastPageMatch[1]) {
            setMaxPage(parseInt(lastPageMatch[1]))
            }
        }
        
        setBooks(data)
        setFilteredBooks(data)
        setLoading(false)
        } catch (error) {
        console.error('Error fetching books:', error)
        setLoading(false)
        }
    }

    const handleFilterChange = (e) => {
        const value = e.target.value.toLowerCase()
        setFilter(value)
        
        if (value === '') {
        setFilteredBooks(books)
        } else {
        const filtered = books.filter(book => 
            book.name.toLowerCase().includes(value) || 
            book.authors.some(author => author.toLowerCase().includes(value))
        )
        setFilteredBooks(filtered)
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

    // Formatear fecha
    const formatDate = (dateString) => {
        const date = new Date(dateString)
        return date.toLocaleDateString()
    }

    return (
        <div className='mx-10 mt-10'>
        <h1 className="text-3xl font-bold text-yellow-500 mb-6">Libros</h1>
        
        <div className="mb-6">
            <input
            type="text"
            placeholder="Buscar por título o autor..."
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
            {filteredBooks.length === 0 ? (
                <p className="text-center py-8 text-gray-400">No se encontraron libros con ese criterio</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredBooks.map(book => {
                    const bookId = getIdFromUrl(book.url)
                    
                    return (
                    <div key={bookId} className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:bg-gray-700 transition-colors">
                        <h2 className="text-xl font-bold text-yellow-500 mb-3">{book.name}</h2>
                        <p className="text-gray-300 mb-2">Autor: {book.authors.join(', ')}</p>
                        <p className="text-gray-300 mb-4">Publicado: {formatDate(book.released)}</p>
                        <Link 
                        to={`/books/${bookId}`} 
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
