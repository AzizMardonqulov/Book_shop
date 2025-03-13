import React from 'react'
import './about-in.css'
import AboutPart1Img from '../../assets/about/2.jpg'
import AboutPart1Img2 from '../../assets/about/3.jpg'
import Logos from '../../assets/about/logos.jpg'
export default function aboutIn() {
  return (
    <div className='about-in1'>
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
                        <h2>First Publication:</h2><h2>1991</h2>
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
                    <div className="about-in-part-1-lable-blog-2-lable-2">An author, a website or magazine, have a an organization that wants <br /> to recommend books, or even just a book-lover with an Instagram feed, you can <br /> sign up to be an affiliate, start your own shop, and be rewarded for your advocacy of books.</div>
                    <div className="about-in-part-1-lable-blog-2-button">
                        <a href="">Contack Now</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="about-in-part-2">
            <div className="about-in-part-2-lable">
                <div className="about-in-part-2-lable-1">My Story</div>
                <div className="about-in-part-2-lable-2">We believe that bookstores are essential to a healthy culture. They’re where authors can connect with readers, where we discover new writers, where children get hooked on the thrill of reading.</div>
                <div className="about-in-part-2-blog-s">
                    <div className="about-in-part-2-blog-1">
                        <div className="about-in-part-2-blog-1-num">
                            01
                        </div>
                        <div className="lable-in">
                        <div className="about-in-part-2-blog-1-lable-1">Great Author Awards - 2006</div>
                        <div className="about-in-part-2-blog-1-lable-1">Won a best author of the year for my second & fourth book about the science fiction.</div>
                        </div>
                    </div>
                    <div className="about-in-part-2-blog-1">
                        <div className="about-in-part-2-blog-1-num">
                            02
                        </div>
                        <div className="lable-in">
                        <div className="about-in-part-2-blog-1-lable-1">Great Author Awards - 2006</div>
                        <div className="about-in-part-2-blog-1-lable-1">Won a best author of the year for my second & fourth book about the science fiction.</div>
                        </div>
                    </div>
                    <div className="about-in-part-2-blog-1">
                        <div className="about-in-part-2-blog-1-num">
                            03
                        </div>
                        <div className="lable-in">
                        <div className="about-in-part-2-blog-1-lable-1">Great Author Awards - 2006</div>
                        <div className="about-in-part-2-blog-1-lable-1">Won a best author of the year for my second & fourth book about the science fiction.</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-in-part-2-img">
                <img src={AboutPart1Img2} alt="" />
            </div>
        </div>
    </div>
  )
}
