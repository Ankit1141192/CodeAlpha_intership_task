import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import contactImg from '../../assets/hireme.png';
import { Link } from 'react-scroll';
import menu from '../../assets/menu-svgrepo-com.svg';


const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const scrollToContact = () => {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav className="navbar">
            <img src={logo} alt="Logo" className='logo' />

            {/* Desktop Menu */}
            <div className="desktopMenu">
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">About</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Project</Link>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Contact</Link>
            </div>

            {/* Resume Button */}
            <a href="https://drive.google.com/file/d/1k9nnMbEITRUGn8xNQxyFbaYHfZ2IlUw_/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                class="resume-button">
                <svg class="resume-icon" width="16" height="16" viewBox="0 0 16 16" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.5 12.5V1.003S3.5.5 4 .5h11s.5.002.5.502v13s0 1.498-1.5 1.498H2s-1.5.002-1.5-1.998v-7.5S.5 5.5 1 5.5h1m4.5-2H9m-2.5 2h6m-6 2h6m-6 2h6m-6 2h6"
                        stroke="#60A5FA" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                Resume
            </a>


            <img src={menu} alt="Menu" className='mobMenu' onClick={() => setShowMenu(!showMenu)} />

            <div className="navMenu" style={{ display: showMenu ? 'flex' : 'none' }}>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>About</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Project</Link>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Contact</Link>
                <a
                    href="https://drive.google.com/file/d/1k9nnMbEITRUGn8xNQxyFbaYHfZ2IlUw_/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="listItem"
                    onClick={() => setShowMenu(false)}
                >
                    Resume
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
