import React from 'react'
import { Link } from 'react-router-dom';
// import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';
import "./Navbar.css"


const Navbar = ({  isAuthenticated }) => {
return (
    <div className="navbar">
        <ul className='navbar-ul'>
            <li>
                <Link to="/logout">Logout</Link>
            </li>
            <li>
                <Link to="/register">Register</Link>
            </li>
            <li>
                <Link to="/login">Login</Link>
            </li>
            <li>
                <Link to="/todo">Todo</Link>
            </li>
        </ul>
    </div>
)
}

export default Navbar
