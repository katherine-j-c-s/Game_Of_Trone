import React, { Component } from 'react'
import {getAllHouses} from '../../Redux/Actions/Actions'
import {connect} from 'react-redux'
import HousesCard from '../HouseCard/HousesCard'

class Houses extends Component {

  componentDidMount(){
    const props = this.props
    props.getAllHouses("withoutChar")
  }

  render() {
    const cargarImagen = require.context("../../img-cp2", true);
    return (
      <div>
        <h1>Game of Thrones</h1>
        <h3>Houses</h3>
        <img src={cargarImagen(`./main-image-cp2.jpg`)} alt="main-img" />
        <HousesCard
          houses={this.props.houses}
        ></HousesCard>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return{
    houses: state.houses,
    getAllHouses: getAllHouses
  }
}

const mapDispatch = (dispatch) => {
  return{
    getAllHouses: (withOrWithout) => dispatch(getAllHouses(withOrWithout))
  }
}

export default connect(mapStateToProps, mapDispatch)(Houses)
