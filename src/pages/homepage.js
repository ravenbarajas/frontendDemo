import React from 'react';
import './homepage.css'; // Import your CSS file
import cardImage1 from '../assets/card1.png'; // Import the image
import cardImage2 from '../assets/card2.png'; // Import the image
import cardImage3 from '../assets/card3.png'; // Import the image
import cardImage4 from '../assets/card4.png'; // Import the image

import fintrlogo from '../assets/fintrlogo.png'; // Import the image
import fintrhamburger from '../assets/fintrhamburger.png'; // Import the image

function homepage() {
  return (
    <div className="homepage-container">
        <div className='homepage-nav'>
            <div className='homepage-nav-left'>
                <img src={fintrlogo} />
                <p>FinTr</p>
            </div>
            <div className='homepage-nav-center'>
                <p>Home</p>
                <p>Pricing</p>
                <p>Services</p>
                <p>FAQs</p>
            </div>
            <div className='homepage-nav-right'>
                <img src={fintrhamburger} />
            </div>
        </div>
        <div className='homepage-header'>
            <p>
                <span>P</span>
                <span>e</span>
                <span>r</span>
                <span>s</span>
                <span>o</span>
                <span>n</span>
                <span>a</span>
                <span>l</span>
                <span>&nbsp;</span>
                <span>F</span>
                <span>i</span>
                <span>n</span>
                <span>a</span>
                <span>n</span>
                <span>c</span>
                <span>e</span>
                <br />
                <span>M</span>
                <span>a</span>
                <span>d</span>
                <span>e</span>
                <span>&nbsp;</span>
                <span>E</span>
                <span>a</span>
                <span>s</span>
                <span>y</span>
                <span>.</span>
            </p>
        </div>

        <div className='homepage-subheader'>
            <p>Kickstart your financial journey now.<br></br>Unlock the power of personal finance with <b>FinTr.</b></p>
        </div>
        <div className='homepage-userauth'>
            <div className='homepage-userauth-login'>
                <p>Login</p>
            </div>
            <div className='homepage-userauth-register'>
                <p>Register</p>
            </div>
        </div>
        <div className='homepage-card'>
            <img src={cardImage4} />
            <img src={cardImage3} />
            <img src={cardImage2} />
            <img src={cardImage1} />
        </div>
    </div>
  );
}

export default homepage;