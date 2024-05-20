import React from 'react'
import "./home.scss"
import Products from './products'


const Home = () => {
  return (
    <div>
        <div className='mainImage'>
            <div className='myImgContent'>
                <h1>Shop With Us</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam assumenda ea quo cupiditate facere deleniti fuga officia.</p>
                <div className='imgbutss'><button className='imgBut'>Shop Now</button>
                <button className='imgButright'>Club Membership</button></div>
            </div> 
        </div>
        <Products/>
    </div>
  )
}

export default Home