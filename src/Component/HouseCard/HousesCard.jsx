import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {deleteHouse} from '../../Redux/Actions/Actions'
import { connect} from 'react-redux'

class HousesCard extends Component {

  handleClik = (id) =>{
      this.props.deleteHouse(id);
  }
  render() {
    return (
      <div>
        {this.props.houses.length > 0 ? this.props.houses.map((h)=>{
          console.log(h.id)
          return(
            <div key={h.id}>
              <button onClick={()=>this.handleClik(h.id)}>delete</button>
              <Link to={`/houses/${h.id}`}>
                <h3>{h.name}</h3>
              </Link>
              <p>Region: {h.region}</p>
              <p>Words: {h.words}</p>
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