import React from 'react'
import './contenedorImagenesMain.css'

import image1 from '../../images/image 1.svg'
import imageOnePeace from '../../images/image 2.jpg'

export default function ContenedorImagenesMain() {
    return (
        <div className='contenedorImagenes'>
            <img src={image1} alt="img1" className="image1"/>
            <img src={imageOnePeace} alt="img-onePeace" className="onePeaceImg"/>
        </div>
    )
}
