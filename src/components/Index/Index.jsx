import React from 'react'
import './index.css'

import Hero from '../Hero/Hero'
import Register from '../Register/Register'
import FormManga from '../FormManga/FormManga' /* CORREGIR */

export default function Index() {
    return (
        <div>
            <Hero/>
            <Register/>
            <FormManga/> {/* CORREGIR */}
        </div>
    )
}
