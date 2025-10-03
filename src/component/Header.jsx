import React from 'react'
import { Link } from 'react-router-dom'
import { LuContact } from "react-icons/lu";
import { IoIosSearch } from "react-icons/io";
import { BiShoppingBag } from "react-icons/bi";

function Header() {
  return (
    <header>
      <div className="stylo-logo">
        <img src="/stylo logo.jpg" alt="" height={40} />
      </div>
      <div className="header-links">
        <div className="header-link1">
          <Link to={'/new-in'} className="header-link1-child">NEW IN</Link>
          <Link to={'/shoes'} className="header-link1-child">SHOES</Link>
          <Link to={'/shoes'} className="header-link1-child">APPAREL</Link>
          <Link to={'/shoes'} className="header-link1-child">BAGS</Link>
          <Link to={'/shoes'} className="header-link1-child">KIDS</Link>
          <Link to={'/shoes'} className="header-link1-child">ACCESSORIES</Link>
          <Link to={'/shoes'} className="header-link1-child">FRAGRANCES</Link>
        </div>
        <div className="header-link2">
          <Link to={'/online exclusive'} className='header-link2-child'>ONLINE EXCLUSIVE</Link>
          <Link to={'/sale'} className='header-link2-child'>SALE</Link>
        </div>
      </div>
      <div className="header-icons">
        <LuContact className='header-icon' />

        <IoIosSearch className='header-icon' />

        <Link to={'/cart'}>
          <BiShoppingBag className='header-icon' />
        </Link>
      </div>
    </header>
  )
}

export default Header