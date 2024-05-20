import React from 'react'
import './products.scss'
import { CiHeart } from "react-icons/ci";
import { CiStar } from "react-icons/ci";


const Products = () => {
  return (
    <div className='container'>
        <div className='prdCont'>
        <h5>POPULAR PRODUCTS</h5>
        <h2>Our Products</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut consequatur laboriosam ipsam.</p>
        </div>
        <div className='productList'>
            <div className='product'>
                <div className='imagess'>
                    <img src="https://preview.colorlib.com/theme/selling/images/model_1_bg.jpg" alt="" />
                </div>
                <h4>Wild West Hoodie</h4>
                <div className='favss'>
                    <div className='myHeart'>
                       <CiHeart /> 
                       <span>29</span>
                    </div>
                    <div className='myStar'>
                       <CiStar /> 
                       <span>5.0</span>
                    </div>
                
                </div>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
                <div className='prdButs'>
                    <button className='blackColor'>Cart</button>
                    <button className='whiteColor'>View</button>
                </div>
            </div>
            
            
        </div>
    </div>
  )
}

export default Products