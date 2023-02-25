import React from 'react'
import './bannerSeparador.css'

import ContenedorImagenesMain from '../ContenedorImagenesMain/ContenedorImagenesMain';
import ContenedorTexto from '../contenedorTexto/ContenedorTexto';

export default function BannerSeparador() {
    return (
        <div className="bannerSeparador">
            <div className='contenedorNaranja'>
                <ContenedorImagenesMain></ContenedorImagenesMain>
                <ContenedorTexto></ContenedorTexto>
            </div>
        </div>
    )
}
