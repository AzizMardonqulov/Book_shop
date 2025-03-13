import React from 'react'
import Navbar from '../companents/navbar/navbar'
import AboutBaner from '../companents/About-baner/About-baner';
import AboutIn from '../companents/about-in/about-in';
import Auther from '../companents/author/auther'
import Trust from '../companents/trusted/trust'
import Article from '../companents/article/article'
import Futer from '../companents/futer/futer'

export default function About() {
  return (
    <div className='About-page'>
        <Navbar />
        <AboutBaner />
        <AboutIn />
        <Auther />
        <Trust />
        <Article />
        <Futer />
    </div> 
    );
}
