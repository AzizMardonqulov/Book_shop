import React from 'react'
import './Home.css'
import Navbar  from '../companents/navbar/navbar'
import Baner from '../companents/baner/baner'

export default function Home() {
  return (
    <div className="home">
          <Navbar />
          <Baner />
    </div>
  )
}
