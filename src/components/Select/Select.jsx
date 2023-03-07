import React from 'react'
import './Select.css'
import axios from 'axios'
import { useState, useEffect } from 'react'

export default function Select() {

    let url = "http://localhost:8080/mangas"

    let [categories, setCategories] = useState([])

    useEffect(
        () => {
            axios.get(url)
            .then( response => setCategories(response.data.categories)
            ).catch(e => console.log(e))
        },[]
    )

    categories = categories.map(e => e.name)
    console.log(categories)

  return (
    <select className="select-manga"name="insert-categories" id="insert-categories">
        <option className='option'>Insert Category</option>
        {
            categories.map((e,i) => <option key={e} value={i}>{e}</option> )
        }
    </select>
    
  )
}

