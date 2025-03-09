import React from 'react'
import './Home.css'
import Navbar  from '../companents/navbar/navbar'
import Baner from '../companents/baner/baner'
import Auther from '../companents/author/auther'

export default function Home() {
  return (
    <div className="home">
          <Navbar />
          <Baner />
          <Auther />
    </div>
  )
}
