import React from 'react'
import "./navbar.scss"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div className='mynav'>
            <h1 className='mainLogo'>Selling.</h1>
            <ul className='links'>
                <Link to={"/"}>Home</Link>
                <Link to={"/addpage"}>Add</Link>
                <li>About us</li>
                <li>Special</li>
                <li>Testimonials</li>
                <li>Blog</li>
                <li>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar