import React from 'react'
import './trust.css'
import trustImg1 from '../../assets/trust/1.png'
import trustImg2 from '../../assets/trust/2.png'
import trustImg3 from '../../assets/trust/3.png'
import trustImg4 from '../../assets/trust/4.png'
import trustImg5 from '../../assets/trust/5.png'
import trustImg6 from '../../assets/trust/6.jpg'

export default function trust() {
  return (
    <div className='trust'>
        <div className='trust-in'>
            <div className="trust-lable-1">Trusted By The Best</div>
            <div className="trust-part-1">
                <div className="trust-part-1-1">
                    <div className="trust-part-1-img">
                        <img src={trustImg1} alt="" />
                    </div>
                    <div className="trust-part-1-lable">
                        <div className="trust-part-1-lable-1">Amazen Corp.</div>
                        <div className="trust-part-1-lable-2">They has been helping readers, music lovers, and videophiles find quality material</div>
                    </div>
                </div>
                <div className="trust-part-1-1">
                    <div className="trust-part-1-img">
                        <img src={trustImg2} alt="" />
                    </div>
                    <div className="trust-part-1-lable">
                        <div className="trust-part-1-lable-1">Megan Books</div>
                        <div className="trust-part-1-lable-2">We help physical bookstores manage their overstock to the book inventory.</div>
                    </div>
                </div>
                <div className="trust-part-1-1">
                    <div className="trust-part-1-img">
                        <img src={trustImg3} alt="" />
                    </div>
                    <div className="trust-part-1-lable">
                        <div className="trust-part-1-lable-1">Megank</div>
                        <div className="trust-part-1-lable-2">They has been helping readers, music lovers, and videophiles find quality material</div>
                    </div>
                </div>
                <div className="trust-part-1-1">
                    <div className="trust-part-1-img">
                        <img src={trustImg4} alt="" />
                    </div>
                    <div className="trust-part-1-lable">
                        <div className="trust-part-1-lable-1">Urban Store</div>
                        <div className="trust-part-1-lable-2">They has been helping readers, music lovers, and videophiles find quality material</div>
                    </div>
                </div>
            </div>
            <div className="trust-part-2">
                <div className="trust-part-2-lable">
                    <div className="trust-part-2-lable-1">Get Book Copy Today!</div>
                    <div className="trust-part-2-lable-2">We believe that bookstores are essential to a healthy culture. They’re where authors can connect with readers.</div>
                    <div className="trust-part-2-button">
                        <a href="#">Order Today</a>
                    </div>
                </div>
                <div className="trust-part-2-img">
                    <img src={trustImg5} alt="" />
                </div>
            </div>
            <div className="trust-part-3">
                <div className="trust-part-3-lable-1">
                What Will You Learn?
                </div>
                <div className="trust-part-3-in">
                 <div className="trust-part-3-in-blog">
                    <div className="trust-part-3-in-blog-1">
                        <div className="trust-part-3-in-blog-1-number">01</div>
                        <div className="trust-part-3-in-blog-1-lable">Use HDFS & Map Reduce for storing & analyzing data at scale.</div>
                    </div>
                    <div className="trust-part-3-in-blog-1">
                        <div className="trust-part-3-in-blog-1-number">02</div>
                        <div className="trust-part-3-in-blog-1-lable">Consume streaming data using Spark Streaming, Flink, and Storm.</div>
                    </div>
                    <div className="trust-part-3-in-blog-1">
                        <div className="trust-part-3-in-blog-1-number">03</div>
                        <div className="trust-part-3-in-blog-1-lable">Choose an appropriate data storage technology for your application</div>
                    </div>
                    <div className="trust-part-3-in-blog-1">
                        <div className="trust-part-3-in-blog-1-number">04</div>
                        <div className="trust-part-3-in-blog-1-lable">Analyze non-relational data using HBase, Cassandra, and MongoDB.</div>
                    </div>
                 </div>
                 <div className="trust-part-3-in-blog-img">
                    <img src={trustImg6} alt="" />
                 </div>
                </div>
            </div>
        </div>
    </div>
  )
}
