import React from 'react'
import './menu.css'

import profilePic from '../../images/profilePic.png'
import {Link as Anchor, Link} from 'react-router-dom'

export default function Menu() {
    return (
        <div className='MenuNavbar'>
            <div className='EncabezadoMenu'>
                <div className='subEncabezado'>
                    <img src={profilePic} alt="profile_pic" />
                    <div>
                        <p>Rodrigo Cabrera</p>
                        <p>RodrigoCabrera@gmail.com</p>
                    </div>
                </div>
                <p>X</p>
            </div>
            <a href="#">Read</a>
            <Link to='/signup'>Register</Link>
            <Link to='/signin'>Login</Link>
        </div>
    )
}
