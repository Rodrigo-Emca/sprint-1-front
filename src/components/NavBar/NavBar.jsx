import React from 'react'
import './navbar.css'

import ButtonIndex from '../ButtonIndex/ButtonIndex'
import imageLogo from "../../images/logo_dos.svg"
import MenuButton from '../MenuButton/MenuButton'
import LogoMain from '../LogoMain/LogoMain'

export default function NavBar() {
  let imageMenu = <img src="../../images/Vector.png" />
  // let imageLogo = <img src="../../images/logo_dos.svg" />
  return (
    <div className="navbar-box">
      <ButtonIndex style="button-menu"> 
      {imageMenu}
      {imageMenu}
      {imageMenu}
      </ButtonIndex>
      <ButtonIndex style="button-logo">
        {imageLogo}
      </ButtonIndex>
    </div>
  )
}
