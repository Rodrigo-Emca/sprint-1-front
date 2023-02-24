import React from "react"
import './hero.css'
import NavBar from "../NavBar/NavBar"
import Bienvenida from "../CuadroBienvenidaMain/Bienvenida"

export default function Hero() {
  return (
    <div>
      <div className="heroContainer">
        <NavBar/>
        <Bienvenida></Bienvenida>
      </div>
    </div>
  )
}
