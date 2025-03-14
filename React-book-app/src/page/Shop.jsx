import React from 'react'
import Navbar from '../companents/navbar/navbar'
import ShopBaner from '../companents/shop/ShopBaner'
import Futer from '../companents/futer/futer'
import ShopIn from '../companents/shop/shopIn'
import './shop.css'
export default function Shop() {
  return (
    <div className='shop'>
        <Navbar />
        <ShopBaner />
        <Futer />
        <ShopIn />
    </div>
  )
}
