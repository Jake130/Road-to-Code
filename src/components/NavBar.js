import React from 'react';
//import React, {useState, useEffect} from 'react';
import '../css/NavBar.css';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav>
            <ul>
                <li><Link to={"/"}>Welcome</Link></li>
                <li><Link to={"/"}>Concepts</Link></li>
                <li><Link to={"/about"}>About</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;