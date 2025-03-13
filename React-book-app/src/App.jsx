import React from 'react'
import Home from './page/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './page/About';
import Shop from './page/Shop';

export default function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home /> } />
      <Route path="/about" element={<About />} />
      <Route path="/shop" element={<Shop />} />
    </Routes>
  </Router>
  )
}
