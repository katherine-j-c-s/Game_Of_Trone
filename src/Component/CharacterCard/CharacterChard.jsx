import React from 'react'

export default function CharacterCard({characters}) {
  return (
    <div>
      {characters&&
      characters.map((ch)=>{
        return(
          <div>
            <img src={ch.imageUrl} alt={ch.fullName} />
            <p>ID: {ch.id}</p>
            <p>Name: {ch.fullName}</p>
            <p>Title: {ch.title}</p>
            <p>Family: {ch.family}</p>
          </div>
        )
      })}
    </div>
  )
}
