import React from 'react'
import './signin.css'
import FormularioEncabezado from '../../components/FormularioEncabezado/FormularioEncabezado';
import FormularioSignIn from '../../components/FormularioSignIn/FormularioSignIn';

import imagenSignIn from '../../images/SignIn.png'
import {Link as Anchor} from 'react-router-dom'

export default function SignIn() {
    return (
    <div className="RegisterContainerGeneral">
        <div className='ImagenRegister'>
            <img src={imagenSignIn} alt="imagenRegistro" className='imagenTotoro'/>
        </div>
        <div className='Register'>
            <div className='ContainerFormulario'>
                <FormularioEncabezado/>
                <FormularioSignIn/>
                <div>
                    <div className='FormularioBase'>
                        <p className='pAlredyAccount'>You don´t have an account? 
                        <Anchor to='/signup'>Sign up</Anchor>
                        </p>
                    </div>
                    <div className='FormularioBase'>
                        <p className='pAlredyAccount'>Go back to <Anchor to='../'>home page</Anchor></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}