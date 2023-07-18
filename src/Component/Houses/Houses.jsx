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
      <main className='relative'>
        <div className='h-16 w-sreen relative'>
          <img className='w-screen top-0 h-fit absolute' src={cargarImagen(`./main-image-cp2.jpg`)} alt="main-img" />
        </div>
        <div className='relative text-slate-200 w-full'>
          <h1 className='text-3xl mx-auto w-fit font-bold'>Game of Thrones</h1>
          <h3 className='mx-auto font-mono border-b-4 px-2 border-orange-600 w-fit'>Houses</h3>
          <div className='flex w-fit mx-auto mt-20'>
            <HousesCard
              houses={this.props.houses}
            ></HousesCard>
          </div>
        </div>
      </main>
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
