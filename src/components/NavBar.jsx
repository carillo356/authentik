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
    <header className={isMenuOpen ? 'header-opened' : 'header'}>
      <img src={WebsiteLogo} className='websiteLogo'/>
      <nav className={isMenuOpen ? 'nav-opened' : 'nav'}>
          <button className='nav-btn' onClick={handleClick}><FaTimes className='nav-icon'/></button>
          <Link to="/authentik/" onClick={() => setIsMenuOpen(false)}>Start Here</Link>
          <Link to="/authentik/blog" onClick={() => setIsMenuOpen(false)}>Our Blog</Link>
          <Link to="/authentik/podcast" onClick={() => setIsMenuOpen(false)}>Podcast</Link>
          <Link to="/authentik/newsletter" onClick={() => setIsMenuOpen(false)}>Newsletter</Link>
          <Link to="/authentik/contact" onClick={() => setIsMenuOpen(false)} className='bold'>Get in Touch</Link>
      </nav>
      <button className='nav-btn' onClick={handleClick}><FaBars className='nav-icon'/></button>
    </header>

    <Routes>
      <Route path="/authentik/" element={<Homepage />} />
      <Route path="/authentik/blog" element={<Blog />} />
      <Route path="/authentik/podcast" element={<Podcast />} />
      <Route path="/authentik/newsletter" element={<Newsletter />} />
      <Route path="/authentik/contact" element={<Contact />} />
    </Routes>
    </>
  )
}

export default NavBar