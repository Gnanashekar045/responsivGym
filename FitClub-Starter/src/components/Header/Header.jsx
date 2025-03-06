import React from "react";
import './Header.css'
import logo from '../../assets/logo.png'

const Header = () => {
    return (
        <div className="header">
        <img src={logo} alt="" className="logo"/>
        <ul className="header-Menu">
            <li>Home</li>
            <li>Promgrams</li>
            <li>Why Us</li>
            <li>Plans</li>
            <li>Testimonials</li>
        </ul>
        </div>
    )
}

export default Header