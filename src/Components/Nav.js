import React from 'react';

import './../App.css';

import { Link } from 'react-router-dom';


function Nav() {
    const navStyle = {
        color: 'white'
    }

    return (
        <nav>
            <h1> Logo </h1>

            <ul className='nav-links'>
                <Link style={navStyle} to='/'>
                    <li> Home </li>
                </Link>

                <Link style={navStyle} to='/profile'>
                    <li> Profile </li>
                </Link>

                <Link style={navStyle} to='/education'>
                    <li> Education </li>
                </Link>

                <Link style={navStyle} to='/work'>
                    <li> Work </li>
                </Link>

                <Link style={navStyle} to='/skills'>
                    <li> Skills </li>
                </Link>

                <Link style={navStyle} to='/portfolio'>
                    <li> Portfolio </li>
                </Link>

                <Link style={navStyle} to='/contact'>
                    <li> Contact </li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;
