import React from 'react'
import './navbar.css'

import MenuButton from '../MenuButton/MenuButton'
import LogoMain from '../LogoMain/LogoMain'

export default function NavBar() {
  return (
    <div className="navbar-box">
      <MenuButton></MenuButton>
      <LogoMain></LogoMain>
    </div>
  )
}
