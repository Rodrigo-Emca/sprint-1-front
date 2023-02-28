import React from "react"
import './hero.css'
import NavBar from "../NavBar/NavBar"
import Bienvenida from "../CuadroBienvenidaMain/Bienvenida"
import BannerSeparador from "../BannerSeparador/BannerSeparador"

export default function Hero() {
  return (
    <div>
      <div className="heroContainer">
        <Bienvenida></Bienvenida>
      </div>
    <BannerSeparador></BannerSeparador>
    </div>
  )
}
