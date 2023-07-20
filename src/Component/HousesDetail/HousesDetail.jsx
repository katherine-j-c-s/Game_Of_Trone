import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {getHouse} from '../../Redux/Actions/Actions' 
import Typewriter from 'typewriter-effect'
import CharacterCard from '../CharacterCard/CharacterChard'

export default function HousesDetail() {
  
  const dispatch = useDispatch()
  const param = useParams()
  const house = useSelector((st)=>st.house)
  const [prev,setPrev] = useState(0)
  const [next,setNext] = useState(1)
  const [count,setCount] = useState()
  const [show,setShow] = useState()
  
  useEffect(()=>{
    dispatch(getHouse(param?.houseId))
    console.log(house);
    if (Object.keys(house).length > 0) { 
      setShow(house?.characters?.slice(prev,next))
      setCount(house?.characters?.length)
    }
  },[house?.characters])

  useEffect(()=>{
    setShow(house?.characters?.slice(prev,next))
  },[prev,next])

  const goNext = () => {
    setPrev(prev+1)
    setNext(next+1)
  }

  const goPrev = () => {
    setPrev(prev-1)
    setNext(next-1)
  }

  return (
    <div className='flex w-full text-slate-200 h-screen bg-amber-950 justify-center '>
      <div className='w-2/5 mt-32'>
        <div className='font-bold text-yellow-300 text-5xl mb-10'>
          <Typewriter onInit={(typewriter)=> {
            typewriter.typeString(`${house?.name}`)
            .start();
            }}
          />
        </div>
        <p className='font-mono px-10 mt-5'>This House Its From {house?.region} and our world it's called {house?.words}</p>
        <p className='font-mono px-10 mt-5'>you mind wonder whos living in this kinde of world</p>
        <h3 className='font-mono text-black px-10 mt-5'>here are some of people who life here {`----->`}</h3>
      </div>
      <div className='w-2/5 pt-20'>
        {console.log(house)}
        <CharacterCard characters={show}/>
        <div className={`flex mt-10 w-44 mx-auto  ${prev === 0 | next === count ? ' justify-center' : 'justify-between'}`}>
          {prev === 0 ? null : 
            <p onClick={goPrev}>prev</p>
          }
          {next === count ? null :
            <p  onClick={goNext}>next</p>
          }
        </div>
      </div>
    </div>
  )
}
