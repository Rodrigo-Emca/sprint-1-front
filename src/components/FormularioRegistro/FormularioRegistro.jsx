import {useRef} from 'react'
import './formularioRegistro.css'
import axios from 'axios'

import imgGoogle from '../../images/Google.png'
import profileIcon from '../../images/profile.png'
import emailIcon from '../../images/@.png'
import passwordIcon from '../../images/lock1.png'

export default function FormularioRegistro() {

    let name = useRef()
    let email = useRef()
    let password = useRef()

async function handleSubmit(event) {
        event.preventDefault()

        let data = {
            [name.current.name]: name.current.value,
            [email.current.name]: email.current.value,
            [password.current.name]: password.current.value
        }
        console.log(data)
        let url = 'http://localhost:8080/users/'
        try {
            await axios.post(url, data)
        } catch(error) {
            console.log(error)
            console.log('Ocurrió un error')
        }
    }

    return (
    <form className='FormularioRegistro' onSubmit={handleSubmit}>
        <fieldset className='innerFormulario'>
            <legend>Name</legend>
                <input ref={name} type="text" className='inputs' name='name' required/>
                <img src={profileIcon} alt="profileIcon" className='icon'/>
        </fieldset>

        <fieldset className='innerFormulario'>
            <legend>Email</legend>
                <input ref={email} type="email" className='inputs' name='email' required/>
                <img src={emailIcon} alt="emailIcon" className='icon'/>
        </fieldset>
            
        <fieldset className='innerFormulario'>
            <legend>Password</legend>
                <input ref={password} type="password" className='inputs' name='password' required/>
                <img src={passwordIcon} alt="passwordIcon" className='icon'/>
        </fieldset>

        <fieldset className='innerFormulario'>
            <legend>Confirm Password</legend>
                <input ref={password} type="password" className='inputs' name='password' required/>
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
