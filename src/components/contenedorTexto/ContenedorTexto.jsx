import React from 'react'
import './contenedorTexto.css'

import TextoP from '../TextoP/TextoP'

export default function ContenedorTexto() {
    return (
        <div className='contenedorTexto'>
            <TextoP text="One Peace" style="OnePeace"></TextoP>
            <TextoP text="Manga" style="Manga"></TextoP>
            <TextoP text="Monkey D. Luffy refuses to let anyone stand in his way to become King of the Pirates. He launches into the seas and will become a captain willing to never give up until he gets hold of the greatest treasure in history: the legendary One Piece." style="Luffy"></TextoP>
        </div>
    )
}
