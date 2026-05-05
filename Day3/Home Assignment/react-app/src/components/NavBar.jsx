import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = ()=>{
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to = '/about'>About</Link>
            <Link to = '/service'>Service</Link>
        </nav>
    )
}

export default NavBar;