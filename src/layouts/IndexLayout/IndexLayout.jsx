import React from 'react'
import './IndexLayout.css'

import NavBar from '../../components/NavBar/NavBar'

export default function IndexLayout(props) {
    return (
        <div>
            <NavBar/>
            {props.children}
        </div>
    )
}
