import React from 'react'
import {useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {getHouse} from '../../Redux/Actions/Actions' 
import CharacterCard from '../CharacterCard/CharacterChard'

export default function HousesDetail() {
  
  const dispatch = useDispatch()
  const param = useParams()
  const house = useSelector((st)=>st.house)
  
  React.useEffect(()=>{
    dispatch(getHouse(param.houseId))
  },[])
  
  return (
    <div>
      <h1>{house?.name}</h1>
      <p>This House Its From {house?.region} and our world it's called {house?.words}</p>
      <p>you mind wonder whos living in this kinde of world</p>
      <h3>here are some of people who life here</h3>
      <CharacterCard characters={house?.characters}/>
    </div>
  )
}
