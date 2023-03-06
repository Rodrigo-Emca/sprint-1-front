import React from 'react'
import './menu.css'

import profilePic from '../../images/profilePic.png'
import {Link as Anchor} from 'react-router-dom'

export default function Menu() {

    // const crearEvento = async () => {
        
    //     let url = `http://localhost:8080/auth/signin`
    //     let token = localStorage.getItem('token')
    //     let headers = {headers:{'Authorization':`Bearer ${token}`}}
    //     let data = { ... }
    //     try {
    //     await axios.post(url,data,headers)
    //     } catch (error) {
    //     console.log(error)
    //     }
    //     }

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
            <Anchor to='/signup'>Register</Anchor>
            <Anchor to='/signin'>Login</Anchor>
        </div>
    )
}
