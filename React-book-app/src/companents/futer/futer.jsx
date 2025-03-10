import React from 'react'
import './futer.css'
export default function futer() {
  return (
    <div className='futer'>
        <div className="futer-part-1">
                <div className="futer-part-1-in">
                <div className="futer-part-1-lable-1">Get The Best Updates</div>
                <div className="futer-part-1-lable-2">Subscribe with your mail id to know the current update in book edition at your fingertip with in a minute.</div>
                <div className="futer-input">
                <input type="email" required placeholder="Enter your email address"/>
                <a href="#">Submit</a>
            </div>
                </div>
        </div>
    </div>
  )
}
