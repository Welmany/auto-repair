import React from 'react';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <div className='header'>
        <div className='header__content'>
          <h1 className='headtext__cormorant'>We make it look like new</h1>
          <p className='p__cormorant'>What are you waiting for?</p>

          <div className='header__content-btn'>
            <Link to='/contactUs'><Button buttonStyle='btn-outline' buttonSize='btn-large' text='Contact' /></Link>
          </div>
        </div>
    </div>
  )
}

export default Header;