import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home/home'
import Details from './Details/details'
import ReadBook from './ReadBook/readbook'

const AppRouter = () => (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/read-book' element={<ReadBook />} />
        <Route path='/details' element={<Details />} />
    </Routes>
)
export default AppRouter;