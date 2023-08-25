import React from 'react'
import '../../css/homefooter.css'
import WebsiteLogo from "../../../images/websiteLogo.png"

function HomeFooter() {
  return (
    <div className='footer-wrapper'>
        <div className='footer-text'>
            <img src={WebsiteLogo}/>
            <span>CREATE HONESTLY.</span>
            <span>&copy; 2018 &#183; ALL RIGHTS RESERVED</span>
        </div>

        <div>
            <div className='footer-quote-div'>
                <span>WE BELIEVE</span>
                <span>"The key to building an authentic business is building an authentic life." &#8212; Brian Gadrner.</span>
            </div>

            <div className='footer-links'>
                <div>
                    <span>About</span>
                    <li>
                        <ul>Start here</ul>
                        <ul>Our Blog</ul>
                        <ul>Podcast</ul>
                        <ul>Newsletter</ul>
                    </li>
                    <span>Terms of Service</span>
                </div>
                    <span>Services</span>
                    <li>
                        <ul>Consulting</ul>
                        <ul>Social Media</ul>
                        <ul>Web Design</ul>
                        <ul>Get in Touch</ul>
                    </li>
                    <span>Privacy Policy</span>
                <div>
                    
                </div>
                    <span>Resources</span>
                    <li>
                        <ul>Themes</ul>
                        <ul>Web Fonts</ul>
                        <ul>Tutorials</ul>
                        <ul>Daily Reads</ul>
                    </li>
                <div>
                    
                </div>
                    <span>Connect</span>
                    <li>
                        <ul>Facebook</ul>
                        <ul>Instagram</ul>
                        <ul>Twitter</ul>
                        <ul>GitHub</ul>
                    </li>
                <div>
                    
                </div>
            </div>
        </div>


    </div>
  )
}

export default HomeFooter