import React from 'react'
import './formularioBase.css'

export default function FormularioBase() {
    return (
    <div>
        <div className='FormularioBase'>
            <p className='pAlredyAccount'>Already have an account? <a>Log in</a></p>
        </div>
        <div className='FormularioBase'>
            <p className='pAlredyAccount'>Go back to <a>home page</a></p>
        </div>
    </div>
    )
}
