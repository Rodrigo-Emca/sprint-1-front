// import React from 'react'
// import './manga.css'
// import { useEffect } from 'react'
// import { useParams } from 'react-router-dom'
// import { useSelector, useDispatch } from 'react-redux'
// import mangaActions from '../../store/Manga/actions'

// import CHAPTERStats from '../../images/CHAPTERStats.png'
// import CHAPTERreactions from '../../images/CHAPTERreactions.png'
// import NarutoImage from '../../images/Naruto.png'

// const { get_manga } = mangaActions

// export default function Manga() {
//     const { id } = useParams()
//     console.log(id)

//     console.log(useSelector(manga=>manga))

//     const dispatch = useDispatch()
//     let data= useSelector(store => store.manga.manga)
//     console.log(data)

//     // useEffect(
//     //     ()=> 
//     //         dispatch(get_manga({_id}))
//     // )
// }

import React, { useState, useEffect } from 'react';
import './manga.css'
import { useParams } from 'react-router-dom';
import axios from 'axios';

import CHAPTERStats from '../../images/CHAPTERStats.png'
import CHAPTERreactions from '../../images/CHAPTERreactions.png'

export default function Manga() {
    const { id } = useParams();
    const URLpeticion = 'http://localhost:8000/mangas/:_id?_id='
    console.log(id)
    const [MANGA, setManga] = useState(null);

    useEffect(() => {
        axios.get(URLpeticion + id)
            .then((response) => {
                setManga(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    let titleManga = MANGA ? MANGA.mangas.title : "";
    let descriptionManga = MANGA ? MANGA.mangas.decription : "";
    let imageManga = MANGA ? MANGA.mangas.cover_photo : "";
    
    const handleMostrarClick = () => {
        axios.get(URLpeticion + id)
            .then((response) => {
                console.log(response.data.mangas)
                setManga(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className='contenedorGeneral'>
            <div className='primerContenedor'>
                <div>
                    <img src={imageManga} alt="MangaImage" className='mangaImagen'/>
                </div>
                <div>
                    <h1>{titleManga}</h1>
                </div>
                <div className='statsReactions'>
                    <img src={CHAPTERStats} alt="CHAPTERStats" />
                    <img src={CHAPTERreactions} alt="CHAPTERreactions" />
                </div>
            </div>
            <div className='conenedorDeBotones'> 
                <button>CHAPTERS</button>
            </div>
            <div className='segundoContenedor'> 
                <button onClick={handleMostrarClick}>MANGA</button>
                {/* Contiene dos opciones para randerizar: */}
                <div>
                    
                    <p>{descriptionManga}</p>
                </div>
                <div>
                    <div>
                        {/* Un div por cada capitulo + boton para leer */}
                    </div>
                </div>
            </div>
        </div>
    )
}
