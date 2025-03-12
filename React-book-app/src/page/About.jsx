import React from 'react'
import Navbar from '../companents/navbar/navbar'
import AboutBaner from '../companents/About-baner/About-baner';
import AboutIn from '../companents/about-in/about-in';

export default function About() {
  return (
    <div className='About-page'>
        <Navbar />
        <AboutBaner />
        <AboutIn />
    </div> 
    );
}
