import React from 'react'
import './mangas.css'
import pexels from'../../images/pexels.png'
import MangasCards from '../MangasCards/MangasCards'


export default function Mangas() {


  return (
    <div className='mangas-container'>
      <img className='img-back' src={pexels} alt="" />
      <div className='container-search'>
        <h2 className='title'>Mangas</h2>
        <form>
          <input className="input-search" type="text"  placeholder='Find your manga here' />
        </form>
      </div>
    
    <MangasCards />
    </div>

  )
}
