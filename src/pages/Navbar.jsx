import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import hamburger and close icons
import logo from '../assets/medical-symbol.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="logo">
                <img src={logo} alt="AxisCare Logo" />
                <span>AxisCare</span>
            </div>
            <div className={`nav-links ${isOpen ? 'open' : 'close'}`}>
                <a href="#Home">Home</a>
                <a href="#About">About</a>
                <a href="#About">Services</a>
                <a href="#About">Doctors</a>
                <a href="#About">Blogs</a>
                <a href="#About">Contact</a>
                {isOpen&&(
                    <a href="#About" className="appointment-btn-nav">Make Appointment</a>
                )}
            </div>
            <a href="#About" className="appointment-btn">Make Appointment</a>

            <div className="hamburger-icon" onClick={toggleMenu}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </div>
        </nav>
    );
};

export default Navbar;
