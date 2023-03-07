import React from 'react'
import './menu.css'

import profilePic from '../../images/profilePic.png'

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
            <a href="#">Register</a>
            <a href="#">Login</a>
            <a href="http://localhost:3000/author-form">Create new author</a>
        </div>
    )
}
