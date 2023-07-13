import React, { Component, useState } from 'react'
import { Link } from 'react-router-dom'
import {deleteHouse} from '../../Redux/Actions/Actions'
import { connect} from 'react-redux'
import img1 from '../../img-cp2/Casa_Stark_escudo.png'
import img2 from '../../img-cp2/Casa_Targaryen_estandarte.png'
import img3 from '../../img-cp2/Casa_Lannister_escudo.png'

class HousesCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }
  handleClik = (id) =>{
      this.props.deleteHouse(id);
  }
  render() {
    const { show } = this.state;
    const showOption = () => {
      if (show === false) {
        this.setState({ show: true });
      }else{
        this.setState({ show: false })
      }
    };
    const logos = [img1,img2,img3]
    return (
      <div className='flex'>
        {this.props.houses.length > 0 ? this.props.houses.map((h,i)=>{
          let logo = logos[i]
          console.log(show);
          return(
            <div 
              onMouseEnter={showOption} 
              onMouseLeave={showOption} 
              className='h-fit relative w-fit hover:-translate-y-2 transition-all mx-2 text-center' 
              key={h.id}
            >
              <div 
                className={`${
                  show === true 
                  ? "px-20" 
                  : "px-2" 
                } 
                bg-white opacity-[0.5] absolute h-full w-full`}
              ></div>
              <div className='relative z-10 w-fit mx-auto'>
                <button onClick={()=>this.handleClik(h.id)}>delete</button>
                <img className='h-32 w-32 mx-auto' src={logo} alt="img" />
                <Link to={`/houses/${h.id}`}>
                  <h3>{h.name}</h3>
                </Link>
                <p>Region: {h.region}</p>
                <p>Words: {h.words}</p>
              </div>
            </div>
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