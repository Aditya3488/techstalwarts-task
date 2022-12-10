import React from 'react'
import Logo from '../Photos/jarvis-text 2.png'
import './header.css'

const Header = () => {
  return (
    <div className='header'>
      <img src={Logo} className='logo' />
    </div>
  )
}

export default Header