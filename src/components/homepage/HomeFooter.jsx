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

        <div className='footer-block'>
            <div className='footer-quote-div'>
                <span>WE BELIEVE</span>
                <span><span className='italic'>"The key to building an authentic business is building an authentic life."</span> &#8212; Brian Gadrner.</span>
            </div>

            <div className='footer-links'>
                <div>
                    <span>ABOUT</span>
                    <li>
                        <ul>Start here</ul>
                        <ul>Our Blog</ul>
                        <ul>Podcast</ul>
                        <ul>Newsletter</ul>
                    </li>
                    <span>TERMS OF SERVICE</span>
                </div>

                <div>
                    <span>SERVICES</span>
                    <li>
                        <ul>Consulting</ul>
                        <ul>Social Media</ul>
                        <ul>Web Design</ul>
                        <ul>Get in Touch</ul>
                    </li>
                    <span>PRIVACY POLICY</span>
                </div>

                <div>
                    <span>RESOURCES</span>
                    <li>
                        <ul>Themes</ul>
                        <ul>Web Fonts</ul>
                        <ul>Tutorials</ul>
                        <ul>Daily Reads</ul>
                    </li>
                </div>
                
                <div>
                    <span>CONNECT</span>
                    <li>
                        <ul>Facebook</ul>
                        <ul>Instagram</ul>
                        <ul>Twitter</ul>
                        <ul>GitHub</ul>
                    </li>
                </div>

            </div>
        </div>


    </div>
  )
}

export default HomeFooter