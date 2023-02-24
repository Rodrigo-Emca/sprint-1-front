import React from 'react'
import './bienvenida.css'
import TextoP from '../TextoP/TextoP'
import ButtonIndex from '../ButtonIndex/ButtonIndex'
import '../ButtonIndex/buttonIndex.css'


export default function Bienvenida() {
    return (
        <div className='bienvenida-container'>
            <TextoP style='ForTheLoveOfManga' text='For the love of manga'></TextoP>
            <TextoP style='ExploreOurVarieties' text='Explore our varieties'></TextoP>
            <TextoP style='MingaLove' text='#MingaLove❤'></TextoP>
            <ButtonIndex style='buttonRead'> 
            <TextoP style='LetsGO' text='Let´s go!'></TextoP> 
            </ButtonIndex>
        </div>
    )
}
