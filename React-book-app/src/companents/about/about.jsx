import React from 'react'
import './about.css'
import AboutImg from '../../assets/about/1.jpg'
export default function about() {
  return (
    <div className='About'>
        <div className="about-in">
            <div className="about-in-img">
                <img src={AboutImg} alt="" />
            </div>
            <div className="about-lable">
                <div className="about-lable-1">About the Author</div>
                <div className="about-lable-2">We believe that bookstores are essential to a healthy culture. They’re where authors can connect with readers, where we discover new writers, where children get hooked on the thrill of reading that can last a lifetime.</div>
                <div className="about-page">
                    <div className="about-page-1">
                        <div className="about-page-1-number">02</div>
                        <div className="about-page-1-lable">Books Published</div>
                    </div>
                    <div className="about-page-1">
                        <div className="about-page-1-number">4.5</div>
                        <div className="about-page-1-lable">User Reviews</div>
                    </div>
                    <div className="about-page-1">
                        <div className="about-page-1-number">04</div>
                        <div className="about-page-1-lable">Best Seller Awards</div>
                    </div>
                </div>
                <div className="about-bottom">
                    <div className="about-bottom-img">
                        <img src="https://cdn.prod.website-files.com/615aa2992a14b77739e3c502/61f3ac2a7ab5da4bc068672e_author-qr-code.jpg" alt="" />
                    </div>
                    <div className="about-bottom-lable">
                        <div className="about-bottom-lable-1">John Abraham , Ph.d</div>
                        <div className="about-bottom-lable-2">mail: <div className="color">johnabraham@gmail.com</div></div>
                        <div className="about-bottom-lable-2">Phone: (99) 505 22 21</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
