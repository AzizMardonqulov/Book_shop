import React from 'react'
import NavbarLogo from '../../assets/navbar/navbar-logo.svg'
import './navbar.css'
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";




export default function navbar() {
  function medionavbar(){
    let MedionNavbar = document.getElementById("MedionNavbar");
    MedionNavbar.style.top="0";
  }
  function closeNav(){
    let MedionNavbar = document.getElementById("MedionNavbar");
    MedionNavbar.style.top="-100vh";
  }
  return (
    <div className='Navbar'>
        <div className="navbar-star">
            <div className="navbar-logo">
                <img src={NavbarLogo} alt="" />
                <div className="navbar-star-item">
                    <ul>
                      <li><a href=""><FaInstagram /></a>
                      </li>
                      <li><a href=""><FaGithub /></a></li>
                      <li><a href=""><FaLinkedinIn /></a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="navbar-left">
            <div className="navbar-left-1">
                <div className="left-1" id='MedionNavbar'>
                    <ul>
                    <img src={NavbarLogo} alt="" />
                      <li><a className='active items' href="/">Home</a></li>
                      <li><a className='items' href="/about">About</a></li>
                      <li><a className='items' href="/shop">Our Store</a></li>
                      <li><a className='items' href="">Contact</a></li>
                      <li id='Bars' onClick={closeNav}><div className="close">x</div></li>
                    </ul>
                </div>
                <div className="left-2">
                    <div className="left-2-item-1">
                      <a href=""><CiShoppingCart /><span>0</span></a>
                    </div>
                    <div className="left-2-item-2">
                      <a href="">Order Today</a>
                    </div>
                </div>
                <div className="left-3">
                  <div onClick={medionavbar} className="bars">
                    <span></span>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}
