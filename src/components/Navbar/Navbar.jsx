import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdClose } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import './Navbar.css';
import DropDown from '../DropDown/DropDown';

function Navbar() {

    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick((prev) => !prev);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
    setDropdown(true)
    }

    const onMouseLeave = () => {
    setDropdown(false)
    }

    return (
    
        <nav className="navbar">

            <div className='navbar__logo'>
                <h2><Link to='/'>CCharme</Link></h2>
            </div> 

            <div className='menu-icon' onClick={handleClick}>
                {click ? <MdClose /> : <GiHamburgerMenu />} 
            </div>  

            <ul className={click ? 'nav-side-menu start' : 'nav-side-menu'}>

            <li className='nav-items'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>Home</Link>
            </li>

            <li className='nav-items' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}> 
                <Link className='nav-links' onClick={closeMobileMenu}>Services
                    {dropdown && <DropDown />}
                </Link>
            </li>

            <li  className='nav-items'> 
                <Link to='/about' className='nav-links' onClick={closeMobileMenu}>About Us</Link>
            </li>

            <li  className='nav-items'> 
                <Link to='/gallery' className='nav-links' onClick={closeMobileMenu}>Gallery</Link>
            </li>

            <li  className='nav-items'> 
                <Link to='/contactUs' className='nav-links' onClick={closeMobileMenu}>Contact</Link>
            </li>

            <li className='nav-items'>
                <Link to="/sign-up" className='nav-links-button' onClick={closeMobileMenu}> Sign Up </Link>
            </li> 

            </ul>

            <div className='navbar__login'>
                <Link to="/sign-up">
                    <button className='btn-dark'>Sign Up</button>
                </Link>
            </div>
            
        </nav>
    )
}

export default Navbar;