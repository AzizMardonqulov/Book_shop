import React from 'react'
import './Home.css'
import Navbar  from '../companents/navbar/navbar'
import Baner from '../companents/baner/baner'
import Auther from '../companents/author/auther'
import About from '../companents/about/about'
import Trust from '../companents/trusted/trust'
import Article from '../companents/article/article'

export default function Home() {
  return (
    <div className="home">
          <Navbar />
          <Baner />
          <Auther />
          <About / >
          <Trust / >
          <Article / >
    </div>
  )
}
