import { useEffect, useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import MangaCard from '../../components/MangaCard/MangaCard'
import './mangaSearch.css'
import textActions from '../../store/Text/actions'

const { capture } = textActions

export default function Index() {
  const [data, setData] = useState([])
  const [reload, setReload] = useState(false)
  const dispatch = useDispatch()
  const defaultText = useSelector(store => store.text.text)
  const text = useRef("")

  useEffect(
    () => { axios.get('http://localhost:8000/mangas/read?title=' + text.current.value).then(res => setData(res.data.mangas)) },
    [reload]
  )
  function hadleChange() {
    setReload(!reload)
    dispatch(capture({ text: text.current.value }))
  }


  return (
    <div className='manga-cont'>
      <div className='search-manga'>
        <h2 className='title-page'>Manga</h2>
        <div className='container-searh-manga'>
          <form className='form' >
            <input className="input" type="text" ref={text} defaultValue={defaultText} name="text" id="text" placeholder='Find your manga here' onChange={hadleChange} />
          </form>
        </div>
      </div>
      <div className='card'>
        <div className='cont-cards'>
          {data?.map(each => <MangaCard key={each.id} data={each} />)}
        </div>
        <div className='page'>
          <button className='prev'>Prev</button>
          <button className='next'>Next</button>
        </div>
      </div>
    </div>

  )
}
