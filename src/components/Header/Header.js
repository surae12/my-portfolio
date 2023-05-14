import React from 'react'
import { useRef } from 'react';
import { Link } from 'react-scroll'
import { FaBars, FaTimes } from "react-icons/fa";
import "./Header.css"
const Header = () => {

    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");

    }
    return (
        <div className='header'>
            <div className='header_left'><h1>Suresh Kumar S</h1></div>
            <div className='header_right' ref={navRef}>
                <Link to="about" smooth={true} duration={500}>
                    <h4>About Me</h4>
                </Link>
                <Link to="skills" smooth={true} duration={500}>
                    <h4>Skills</h4>
                </Link>
                <Link to="projects" smooth={true} duration={500}>
                    <h4>Projects</h4>
                </Link>
                <Link to="contact" smooth={true} duration={500}>
                    <h4>Contact Me</h4>
                </Link>
                <button className='nav-btn nav-close-btn' onClick={showNavbar}><FaTimes /></button>
            </div>
            <button className='nav-btn' onClick={showNavbar}><FaBars /></button>
        </div>
    )
}

export default Header