import React from 'react'
import './menuButton.css'

import image from '../../images/Vector.png'

export default function MenuButton() {
  return (
    <button className='menuButton'>
        <img src={image} />
        <img src={image} />
        <img src={image} />
    </button>
  )
}
