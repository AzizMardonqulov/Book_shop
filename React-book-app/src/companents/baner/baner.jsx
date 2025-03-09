import React from 'react'
import './baner.css'
import  BanerImg from '../../assets/baner/img-1.png'

export default function baner() {
  return (
    <div className='Baner'>
        <div className="baner-in">
            <div className="baner-lable">
                <div className="baner-lable-1">Welcome to Pages!!!</div>
                <div className="baner-lable-2">Your Books From The Best Writer.</div>
                <div className="baner-lable-3">We believe that reading books are essential to a healthy culture. They’re where authors can connect with readers.</div>
                <div className="baner-button">
                    <a href="#">Order Today</a>
                    <a href="#">Read Free Demo</a>
                </div>
                <div className="baner-page">
                    <div className="baner-page-1">
                        <div className="baner-page-1-lable-1">Pages:</div>
                        <div className="baner-page-1-lable-2">250pages</div>
                    </div>
                    <div className="baner-page-1">
                        <div className="baner-page-1-lable-1">Length</div>
                        <div className="baner-page-1-lable-2">10 Hour</div>
                    </div>
                    <div className="baner-page-1">
                        <div className="baner-page-1-lable-1">Ratings
                        </div>
                        <div className="baner-page-1-lable-2">4.5/5 (305 ratings)</div>
                    </div>
                </div>
            </div>
            <div className="baner-img">
                <img src={BanerImg} alt="" />
            </div>
        </div>
    </div>
  )
}
