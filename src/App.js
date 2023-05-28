import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddBlog from './pages/AddBlog';
import NavBar from './units/NavBar';
export default function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AddBlog" element={<AddBlog />} />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </div>
  )
}
