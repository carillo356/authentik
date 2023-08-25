import { useState } from 'react'
import { Link, Route, Routes } from "react-router-dom"
import { FaBars, FaTimes } from "react-icons/fa"
import "../css/navbar.css"
import Blog from "./pages/Blog"
import Podcast from "./pages/Podcast"
import Newsletter from "./pages/Newsletter"
import Contact from "./pages/Contact"
import WebsiteLogo from "../../images/websiteLogo.png"
import Homepage from './Homepage'

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function handleClick() {
    if(!isMenuOpen) {
      setIsMenuOpen(prevValue => !prevValue)
    } else {
      setIsMenuOpen(prevValue => !prevValue)
    }
  }

  return (
    <>
    <header className={isMenuOpen ? 'header-opened' : 'header-closed'}>
      <img src={WebsiteLogo} className='websiteLogo'/>
      <nav className={isMenuOpen ? 'nav-opened' : 'nav-closed'}>
          <button className='nav-closed-btn' onClick={handleClick}><FaTimes className='nav-closed-icon'/></button>
          <Link to="/" onClick={handleClick}>Start Here</Link>
          <Link to="/blog" onClick={handleClick}>Our Blog</Link>
          <Link to="/podcast" onClick={handleClick}>Podcast</Link>
          <Link to="/newsletter" onClick={handleClick}>Newsletter</Link>
          <Link to="/contact" onClick={handleClick}>Get in Touch</Link>
      </nav>
      <button className='nav-btn' onClick={handleClick}><FaBars className='nav-icon'/></button>
    </header>

    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/podcast" element={<Podcast />} />
      <Route path="/newsletter" element={<Newsletter />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </>
  )
}

export default NavBar