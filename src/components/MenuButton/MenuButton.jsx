import React from 'react'
import './menuButton.css'

import menuImagen from '../../images/Menu.svg'

export default function MenuButton() {
  return (
    <button className='menuButton'>
        <img src={menuImagen} alt="menú" />
    </button>
  )
}
