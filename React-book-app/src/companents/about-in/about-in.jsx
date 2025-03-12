import React from 'react'
import './about-in.css'
import AboutPart1Img from '../../assets/about/2.jpg'
import Logos from '../../assets/about/logos.jpg'
export default function aboutIn() {
  return (
    <div className='about-in'>
        <div className="about-in-part-1">
            <div className="about-in-part-1-img">
                <img src={AboutPart1Img} alt="" />
            </div>
            <div className="about-in-part-1-lable">
                <div className="about-in-part-1-lable-blog-1">
                    <div className="about-in-part-1-lable-blog-1-lable-1">
                        <h2>Country :</h2><h2>United Kingdom</h2>
                    </div>
                    <div className="about-in-part-1-lable-blog-1-lable-1">
                        <h2>Language:</h2><h2>English</h2>
                    </div>
                    <div className="about-in-part-1-lable-blog-1-lable-1">
                        <h2>Genre:</h2><h2>Historical</h2>
                    </div>
                    <div className="about-in-part-1-lable-blog-1-lable-1">
                        <h2>Follow Me On:</h2><h2><img src={Logos} alt="" /></h2>
                    </div>
                </div>
                <div className="about-in-part-1-lable-blog-2">
                    <div className="about-in-part-1-lable-blog-2-lable-1">About Dr. John Abraham</div>
                    <div className="about-in-part-1-lable-blog-2-lable-1">An author, a website or magazine, have a an organization that wants to recommend books, or even just a book-lover with an Instagram feed, you can sign up to be an affiliate, start your own shop, and be rewarded for your advocacy of books.</div>
                    <div className="about-in-part-1-lable-blog-2-button">
                        <a href="">Contack Now</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
