import React from 'react'
import './auther.css'
import autherImg1 from "../../assets/auther/1.png"
import autherImg2 from "../../assets/auther/2.png"
export default function auther() {
  return (
    <div className='auther'>
        <div className="auther-in">
            <div className="auther-lable-1">The Author’s Book</div>
            <div className="auther-page">
                <div className="auther-page-1">
                    <div className="auther-page-img">
                        <img src={autherImg1} alt="" />
                    </div>
                    <div className="auther-page-lable">
                        <a href='#' className="auther-page-lable-1">Atomic One’s</a>
                        <div className="auther-page-lable-2">$ 13.84 USD</div>
                        <div className="auther-page-lable-3">As the book contains theoretical content as well as solved questions.</div>
                        <div className="auther-page-lable-4">Printed Book</div>
                        <div className="auther-page-button">
                            <a href="#">Order Now</a>
                        </div>
                    </div>
                </div>
                <div className="auther-page-1">
                    <div className="auther-page-img">
                        <img src={autherImg2} alt="" />
                    </div>
                    <a href='#' className="auther-page-lable">
                        <a href='#' className="auther-page-lable-1">The Dark Light</a>
                        <div className="auther-page-lable-2">$ 13.84 USD</div>
                        <div className="auther-page-lable-3">As the book contains theoretical content as well as solved questions.</div>
                        <div className="auther-page-lable-4">Printed Book</div>
                        <div className="auther-page-button">
                            <a href="#">Order Now</a>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}
