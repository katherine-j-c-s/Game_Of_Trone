import React, { Component, useState } from 'react'
import { Link } from 'react-router-dom'
import {deleteHouse} from '../../Redux/Actions/Actions'
import { connect} from 'react-redux'
import img1 from '../../img-cp2/Casa_Stark_escudo.png'
import img2 from '../../img-cp2/Casa_Targaryen_estandarte.png'
import img3 from '../../img-cp2/Casa_Lannister_escudo.png'

class HousesCard extends Component {
  handleClik = (id) =>{
      this.props.deleteHouse(id);
  }
  render() {
    const logos = [img1,img2,img3]
    return (
      <div className='flex w-full justify-evenly'>
        {this.props.houses.length > 0 ? this.props.houses.map((h,i)=>{
          let logo = logos[i]
          return(
            <Link to={`/houses/${h.id}`}>
            <div 
              key={h.id} 
              className='relative cursor-pointer hover:-translate-y-2 transition-all text-center bg-amber-900 z-30 w-fit rounded-xl mx-5 py-5 px-8'
            >
                <img className='h-32 relative mb-3 z-10 w-32 mx-auto' src={logo} alt="img" />
                <svg 
                  className='absolute top-2 left-2'
                  onClick={()=>this.handleClik(h.id)}
                  xmlns="http://www.w3.org/2000/svg" 
                  height="1em" 
                  viewBox="0 0 448 512">
                  <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/>
                </svg>
                <h3 className='font-bold text-orange-950 '>{h.name}</h3>
                <p className='my-4'>Region: {h.region}</p>
                <p>Words: {h.words}</p>
            </div>
            </Link>
          )
          
        }) : null
         }
      </div>
    )
  }
}

const mapDispatch = (dispatch)=>{
  return{
    deleteHouse: (id) => dispatch(deleteHouse(id))
  }
}

export default connect(null, mapDispatch)(HousesCard)