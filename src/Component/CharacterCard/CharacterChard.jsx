import React from 'react'

export default function CharacterCard({characters}) {
  return (
    <div className='w-full'>
      {characters&&
      characters.map((ch)=>{
        return(
          <div className='w-fit mx-auto bg-black shadow-xl shadow-yellow-600 py-10 px-20 rounded-xl'>
            <img className='w-60 h-64 rounded-full  mb-10 ' src={ch.imageUrl} alt={ch.fullName} />
            <div className='flex w-full justify-center mb-2'>
              <p className='text-yellow-200 mr-2'>ID:</p>
              <p>{ch.id}</p>
            </div>
            <div className='flex w-full justify-center mb-2'>
              <p className='text-yellow-200 mr-2'>Name:</p>
              <p>{ch.fullName}</p>
            </div>
            <div className='flex w-full justify-center mb-2'>
              <p className='text-yellow-200 mr-2'>Title:</p>
              <p>{ch.title}</p>
            </div>
            <div className='flex w-full justify-center mb-2'>
              <p className='text-yellow-200 mr-2'>Family:</p>
              <p>{ch.family}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
