import React from 'react'
import Home from './page/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './page/About';

export default function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home /> } />
      <Route path="/about" element={<About />} />
    </Routes>
  </Router>
  )
}
