import React from 'react'
import './notfound.css'
import {Link as Anchor} from 'react-router-dom'

export default function NotFound() {
    return (
        <div className='NotFound'>
            <h3>¡Oops! Página no encontrada.</h3>
            <h4>Intenta nuevamente:</h4>
            <Anchor to='/index'>Volver a Home</Anchor>
        </div>
    )
}
