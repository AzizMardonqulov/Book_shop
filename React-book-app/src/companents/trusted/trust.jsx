import React from 'react'
import './trust.css'
import trustImg1 from '../../assets/trust/1.png'
import trustImg2 from '../../assets/trust/2.png'
import trustImg3 from '../../assets/trust/3.png'
import trustImg4 from '../../assets/trust/4.png'

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
        </div>
    </div>
  )
}
