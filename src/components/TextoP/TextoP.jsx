import React from 'react'
import './textoP.css'

export default function TextoP(props) {
  return (
    <p className={props.style}>{props.text}</p>
  )
}
