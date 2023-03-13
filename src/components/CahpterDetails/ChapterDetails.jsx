import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import './chapterDetails.css'
import Arrowr from '../../images/Arrowr.svg'
import Arrowl from '../../images/Arrowl.svg'

export default function ChapterDetails() {
    let navigate = useNavigate()
    let { id, page } = useParams()
    let url = `http://localhost:8000/chapters/${id}`
    let [Chapters, setChapter] = useState([])
    let [index, setIndex] = useState(Number(page))

    useEffect(() => {
        axios.get(url).then(res => {
            setChapter(res.data.Chapters);
            setIndex(Number(page));
        }).catch(error => console.log(error));
    }, [id, page]);

    function handlePrev(e) {
        if (index <= 0) {
            navigate('/mangas/:page');
        } else {
            setIndex(index - 1);
            navigate(`/chapters/${id}/${index - 1}`);
        }
    }


    function handleNext(e) {
        if (index + 1 > Chapters?.pages?.length - 1) {
            return navigate(`/chapters/640a29d7aa914d6b7c584714/0`)
        }
        setIndex(index + 1);
        if (index + 1 === Chapters?.pages?.length) {
            return navigate(`/chapters/${id}/0`);
        }
        return (navigate(`/chapters/${id}/${index + 1}`))
    }

    console.log(Chapters)
    return (
        <div className='div-chapter'>
            <div className='chapter'>
                <p className='parrafo-chapter'> Capítulo {Chapters.order}, {Chapters.title} </p>
            </div>
            <div className='btnArrow btnNext' onClick={handleNext}>
                <img src={Arrowr} alt='arrowr' />
            </div>
            <div className='btnArrow btnPrev' onClick={handlePrev}>
                <img src={Arrowl} alt='arrowl' />
            </div>
            <div className='div-page'>
                <img src={Chapters?.pages?.[page]} alt="" />
            </div>
        </div>
    )
}

