import React from 'react';
import { FiInstagram, FiFacebook, FiTwitter } from "react-icons/fi"; 
import './Footer.css';

function Footer() {
  return (
    <div className='footer'>
        <div className='footer__links'>
            <div className='footer__links-contact'>
                <h1 className='footer-headtext'>Contact Us</h1>
                <p className='p__opensans'>9 W 53rd St, New York, NY 10019, USA</p>
                <p className='p__opensans'>+1 212-344-1230</p>
                <p className='p__opensans'>+1 212-555-1230</p>
            </div>
            
            <div className='footer__links-logo'>
                <h1 className='footer-headtext'>CCharme</h1>
                <p className='p__opensans'>"The Best Way To Find Yourself Is To Lose Yourself In The Service Of Others."</p> 
                <div className='footer__links-icons'>
                    <a rel="noreferrer noopener" href='http://www.facebook.com/' target='_blank'><FiFacebook /></a>
                    <FiInstagram />
                    <FiTwitter />
                </div>
            </div>

            <div className='footer__links-work'>
                <h1 className='footer-headtext'>Working Hours</h1>
                <p className='p__opensans'>Monday-Friday:</p>
                <p className='p__opensans'>08:00 Am - 12:00 a.m</p>
                <p className='p__opensans'>Saturday-Sunday:</p>
                <p className='p__opensans'>07:00 Am - 11:00 p.m</p>
            </div>
        </div>

        <div className='footer__copyright'>
            <p className='p__opensans'>2023 CCharme. All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer;
