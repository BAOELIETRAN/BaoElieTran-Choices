import React from 'react';
import logo from "../images/dior.jpg"
export default function Navbar(){
    return (
        <nav>
            <img src= {logo} alt="" className='nav--icon'/>
            <h3 className='nav--logo_text'>This is DIOR</h3>
            <h4 className='nav--title'>All About DIOR</h4>
        </nav>
    )
}