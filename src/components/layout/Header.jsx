import React from 'react'
import {Link } from 'react-router-dom';


function Header() {
    return (
    <header style={headerStyle}>
        <h1>ToDo List</h1>
        <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
    </header>
    );
}

const headerStyle = {
    background:'#000',
    color:'white',
    textAlign:'center',
    padding: '10px',
    marginBottom:'10px'
}

const linkStyle={
    color:'white',
    textDecoration:'none'
}

export default Header; 