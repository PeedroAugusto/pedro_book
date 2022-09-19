import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home/home'
import Details from './Details/details'
import ReadBook from './ReadBook/readbook'
import ListBook from './List/listbooks'

const AppRouter = () => (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/read-book' element={<ReadBook />} />
        <Route path='/details' element={<Details />} />
        <Route path='/list_books' element={<ListBook />} />

        
        <Route path='/list_books_aventuras' element={<ListBook />} />
        <Route path='/list_books_romances' element={<ListBook />} />
        <Route path='/list_books_suspences' element={<ListBook />} />
        <Route path='/list_books_ultimas_chegadas' element={<ListBook />} />
    </Routes>
)
export default AppRouter;