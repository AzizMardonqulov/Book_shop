import React from 'react'
import './futer.css'
import futerLogo from '../../assets/navbar/navbar-logo.svg'
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import ItemImg from '../../assets/futer/1.svg'
export default function futer() {
  return (
    <div className='futer'>
        <div className="futer-part-1">
                <div className="futer-part-1-in">
                <div className="futer-part-1-lable-1">Get The Best Updates</div>
                <div className="futer-part-1-lable-2">Subscribe with your mail id to know the current update in book <br /> edition at your fingertip with in a minute.</div>
                <div className="futer-input">
                <input type="email" required placeholder="Enter your email address"/>
                <a href="#">Subscribe</a>
            </div>
                </div>
        </div>
        <div className="futer-part-2">
            <ul>
              <li>
                <div className="futer-logo">
                  <img src={futerLogo} alt="" />
                </div>
                <div className="navbar-star-item">
                    <ul>
                      <li><a href="#"><FaInstagram /></a>
                      </li>
                      <li><a href="#"><FaGithub /></a></li>
                      <li><a href="#"><FaLinkedinIn /></a></li>
                    </ul>
                </div>
              </li>
              <li>
                <div className="futer-part-2-lable-1">Explore</div>
                <ul className='futer-ul-1'>
                  <li><a href="#"><img src={ItemImg} alt="" /> Home</a></li>
                  <li><a href="#"><img src={ItemImg} alt="" /> About</a></li>
                  <li><a href="#"><img src={ItemImg} alt="" /> Article</a></li>
                  <li><a href="#"><img src={ItemImg} alt="" /> Our Story</a></li>
                  <li><a href="#"><img src={ItemImg} alt="" /> Contact</a></li>
                </ul>
              </li>
              <li>
                <div className="futer-part-2-lable-1">Utility Pages</div>
                <ul className='futer-ul-1'>
                  <li><a href="#"><img src={ItemImg} alt="" /> Style Guide</a></li>
                  <li><a href="#"><img src={ItemImg} alt="" /> 404 Not Found</a></li>
                  <li><a href="#"><img src={ItemImg} alt="" /> Password Protected</a></li>
                  <li><a href="#"><img src={ItemImg} alt="" />Licenses</a></li>
                  <li><a href="#"><img src={ItemImg} alt="" />Changelog</a></li>
                </ul>
              </li>
              <li>
                <div className="futer-part-2-lable-1">Keep in Touch</div>
                <ul className='futer-ul-3'>
                  <li>
                    <div className="">
                    <div className="futer-star">Address :</div>
                    <div className="futer-left">24A Kingston St, Los Vegas <br /> NC 28202, USA.</div>
                    </div>
                  </li>
                  <li>
                    <div className="">
                    <div className="futer-star">Mail :</div>
                    <div className="futer-left">aizmardonqulov6@gmail.com</div>
                    </div>
                  </li>
                  <li>
                    <div className="">
                    <div className="futer-star">Phone :</div>
                    <div className="futer-left">+998 (99) 505 22 21</div>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
        </div>
    </div>
  )
}
