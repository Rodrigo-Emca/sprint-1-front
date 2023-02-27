import React, { useState } from 'react'
import './menuButton.css'
import Menu from '../Menu/Menu'

export default function MenuButton() {

  const [show, setShow] = useState(false)

  return (
    <button className='menuButton' onClick={(handleShow) => setShow(!show)}>
        {(show) ? (<Menu/>) : (null)}
    </button>
  )
}
