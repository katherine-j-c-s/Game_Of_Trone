import { Routes, Route, } from 'react-router-dom'

import Header from './pages/Header'
import Footer from './pages/Footer'

import Home from './pages/Home'

import Houses from './pages/Houses'
import HouseDetail from './pages/HouseDetail'

import Books from './pages/Books'
import BookDetail from './pages/BookDetail'

import Characters from './pages/Characters'
import CharacterDetail from './pages/CharacterDetail'

// Componentes
export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/characters/:id" element={<CharacterDetail />} />
          <Route path="/books" element={<Books />} />
          <Route path="/books/:id" element={<BookDetail />} />
          <Route path="/houses" element={<Houses />} />
          <Route path="/houses/:id" element={<HouseDetail />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}