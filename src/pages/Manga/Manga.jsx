import React, { useState, useEffect } from "react";
import "./manga.css";
import { useParams } from "react-router-dom";
import { Link as Anchor } from 'react-router-dom'
import axios from "axios";

import CHAPTERStats from "../../images/CHAPTERStats.png";
import CHAPTERreactions from "../../images/CHAPTERreactions.png";

export default function Manga() {
    const { id } = useParams();
    const URLpeticionManga = "http://localhost:8000/mangas/:_id?_id=";
    const [MANGA, setManga] = useState(null);

    useEffect(() => {
        axios
        .get(URLpeticionManga + id)
        .then((response) => {
            setManga(response.data.mangas);
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);

    let titleManga = MANGA ? MANGA.title : "";
    let descriptionManga = MANGA ? MANGA.decription : "";
    let imageManga = MANGA ? MANGA.cover_photo : "";

    //Para mostrar los detalles cada vez que se aprete el boton MANGA.
    // const handleMostrarDetallesClick = () => {
    //     axios
    //     .get(URLpeticionManga + id)
    //     .then((response) => {
    //         setManga(response.data.mangas);
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     });
    // };



    //Para mostrar los capitulos cada vez que se aprete el boton CHAPTERS.

    const URLpeticionChapters = "http://localhost:8000/chapters/chapters?manga_id=";
    const [CHAPTERS, setChapters] = useState(null);
    const [mostrarChapters, setMostrarChapters] = useState(false);

    // useEffect(() => {
    //     axios
    //     .get(URLpeticionChapters + id)
    //     .then((response) => {
    //         setChapters(response.data.chapters);
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     });
    // }, []);

    // const handleMostrarChaptersClick = () => {
    //     axios
    //     .get(URLpeticionChapters + id)
    //     .then((response) => {
    //         setChapters(response.data.chapters);
    //         setMostrarChapters(false);
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     });
    // };

    const handleMostrarChaptersClick = () => {
        axios
        .get(URLpeticionChapters + id)
        .then((response) => {
            setChapters(response.data.chapters);
            setMostrarChapters(true);
        })
        .catch((error) => {
            console.log(error);
        });
    };
    
    const handleMostrarDetallesClick = () => {
        axios
        .get(URLpeticionManga + id)
        .then((response) => {
            setManga(response.data.mangas);
            setMostrarChapters(false);
        })
        .catch((error) => {
            console.log(error);
        });
    };

    return (
        <div className="contenedorGeneral">
            <div className="primerContenedor">
                <div>
                <img src={imageManga} alt="MangaImage" className="mangaImagen" />
                </div>
                <div>
                <h1>{titleManga}</h1>
                </div>
                <div className="statsReactions">
                <img src={CHAPTERStats} alt="CHAPTERStats" />
                <img src={CHAPTERreactions} alt="CHAPTERreactions" />
                </div>
            </div>
            <div className="conenedorDeBotones">
                <button onClick={handleMostrarDetallesClick} className="botones">
                MANGA
                </button>
                <button onClick={handleMostrarChaptersClick} className="botones">
                CHAPTERS
                </button>
            </div>
            {!mostrarChapters && (
                <div className="contenedorDescription">
                    <div>
                        <p>{descriptionManga}</p>
                    </div>
                </div>
            )}

            {mostrarChapters && (
                <div className="contenedorChapters">
                    <div>
                        {CHAPTERS && CHAPTERS.map((chapter, index) => (
                            <div key={index} className="innerContenedorChapter">
                                <img src={imageManga} alt={chapter.title}  className="chapterImage"/>
                                <div>
                                    <p>Title: {chapter.title}</p>
                                    <p>Order: {chapter.order}</p>
                                </div>
                                <Anchor to={"/chapter/"+id} className='btn-read'>Read</Anchor>
                            </div>
                        ))}
                    </div>
                </div>
    )}
    </div>
    )
}

{/* 
            <div className="contenedorDescription">
                <div>
                    <p>{descriptionManga}</p>
                </div>
            </div>
            <div className="contenedorChapters">
                <div>
                    {CHAPTERS && CHAPTERS.map((chapter, index) => (
                        <div key={index} className="innerContenedorChapter">
                            <img src={imageManga} alt={chapter.title}  className="chapterImage"/>
                            <div>
                                <p>Title: {chapter.title}</p>
                                <p>Order: {chapter.order}</p>
                            </div>
                            <Anchor to={"/chapter/"+id} className='btn-read'>Read</Anchor>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
} */}
