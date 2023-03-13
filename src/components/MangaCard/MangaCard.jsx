import { Link as Anchor } from 'react-router-dom'
import './MangaCard.css'

export default function MangaCard({ data }) {
  return (
    <div className='card-container'>
      <span className='span'></span>
      <div className='inf-card'>
        <h2 className='title-card'>{data.title}</h2>
        <h3 className='type-card'>{data.category_id.name}</h3>
        <Anchor to={"/mangas/"+data._id}>
          <button className='btn-card'>Read</button>
        </Anchor>
      </div>
      <img className='img-card' src={data.cover_photo} alt="naruto" />
    </div>

  )
}


