import React from 'react'
import './formularioEncabezado.css'

import LogoMain from '../../images/logo_dos.svg';

export default function FormularioEncabezado() {
    return (
    <div className='EncabezadoFormulario'>
        <img src={LogoMain} alt="" className='logoFormulario'/>
        <p className='titleg'>Welcome</p>
        <p className='titleh'>Discover manga, manhua and manhwa, track your progress, have fun, read manga.</p>
    </div>
)
}
