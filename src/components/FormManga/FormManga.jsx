import { useRef } from 'react'
import './formManga.css'
import Select from '../Select/Select'
import axios from 'axios'

export default function FormularioRegistro() {

    let title = useRef()
    let cover_photo = useRef()
    let description = useRef()
    let category_id = useRef()

    async function handleSubmit(event) {
        event.preventDefault()

        let data = {

            [title.current.name]: title.current.value,
            [cover_photo.current.name]: cover_photo.current.value,
            [description.current.name]: description.current.value,
            [category_id.current.name]: category_id.current.value
        }
        console.log(data)
        let url = 'http://localhost:8080/mangas/'
        try {
            await axios.post(url, data)
        } catch (error) {
            console.log(error)
            console.log('Ocurrió un error')
        }
    }

    return (
        <form className='FormularioRegistro-m' onSubmit={handleSubmit}>
            <h2 className='title-manga'>New Manga</h2>
            <input ref={title} type="text" className='inputs-m' name='title' placeholder='Insert title' required />
            <Select />
            <input ref={cover_photo} type="text" className='inputs-m' name='cover_photo' placeholder='Insert photo' required />
            <input ref={description} type="text" className='inputs-m' name='description' placeholder='Insert description' required />
            <input ref={category_id} type="text" className='inputs-m' name='category_id' placeholder='category id' value='64056b2e23fd4842685364f2' required />
            <input type="submit" value="Send" className='SignUpButton-m' />

        </form>
    ) 
}
