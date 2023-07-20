import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect} from 'react-redux'
import img1 from '../../img-cp2/Casa_Stark_escudo.png'
import img2 from '../../img-cp2/Casa_Targaryen_estandarte.png'
import img3 from '../../img-cp2/Casa_Lannister_escudo.png'

class HousesCard extends Component {
  render() {
    const logos = [img1,img2,img3]
    return (
      <div className='flex w-full justify-evenly'>
        {this.props.houses.length > 0 ? this.props.houses.map((h,i)=>{
          let logo = logos[i]
          return(
            <Link key={i} to={`/houses/${h.id}`}>
            <div 
              key={h.id} 
              className='relative cursor-pointer hover:-translate-y-2 transition-all text-center bg-amber-900 z-30 w-fit rounded-xl mx-5 py-5 px-8'
            >
                <img className='h-32 relative mb-3 z-10 w-32 mx-auto' src={logo} alt="img" />
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

export default connect(null, null)(HousesCard)