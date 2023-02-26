import React from 'react'
import './formularioRegistro.css'

import imgGoogle from '../../images/Google.png'
import profileIcon from '../../images/profile.png'
import emailIcon from '../../images/@.png'
import passwordIcon from '../../images/lock1.png'

export default function FormularioRegistro() {
    return (
    <form action="#" className='FormularioRegistro'>
        <fieldset className='innerFormulario'>
            <legend>Name</legend>
                <input type="text" className='inputs'/>
                <img src={profileIcon} alt="profileIcon" className='icon'/>
        </fieldset>

        <fieldset className='innerFormulario'>
            <legend>Email</legend>
                <input type="email" className='inputs'/>
                <img src={emailIcon} alt="emailIcon" className='icon'/>
        </fieldset>
            
        <fieldset className='innerFormulario'>
            <legend>Password</legend>
                <input type="password" className='inputs'/>
                <img src={passwordIcon} alt="passwordIcon" className='icon'/>
        </fieldset>

        <fieldset className='innerFormulario'>
            <legend>Confirm Password</legend>
                <input type="password" className='inputs'/>
                <img src={passwordIcon} alt="passwordIcon" className='icon'/>
        </fieldset>

        <label className='pSendNotif'>
        <input type="checkbox"  className='checkSendNotif'/>
            Send me a notification to my email
            </label>
        <input type="submit" value="Sign up" className='SignUpButton'/>
        <button type='button' className='buttonSignGoogle'>
            <img src={imgGoogle} alt="" />
            <p className='pGoogle'>Sign with Google</p>
        </button>
    </form>
)
}
