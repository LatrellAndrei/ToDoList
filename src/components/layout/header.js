import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
    return (
        <header style={headerStyle}>
        <h1>To do List</h1>
        <Link to="/" style={LinkStyle}>Home</Link> | <Link  to="/about" style={LinkStyle}>About</Link>
        </header>
    );
}

const headerStyle = {
    background: 'teal',
    color: 'white',
    textAlign: 'center',
    padding: '10px'
}

const LinkStyle = {
    color: '#fff',
    textDecoration: 'none'
}

export default Header;