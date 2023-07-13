import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Nav extends Component {
  render() {
    return (
      <div className='bg-black shadow-xl text-slate-200 py-5 flex justify-between px-20'>
        <Link to={"/"}>
          <p className='hover:text-orange-500 transition-all cursor-pointer'>Home</p>
        </Link>
        <Link to={"/house/create"}>
          <p className='hover:text-orange-500 transition-all cursor-pointer'>Create House</p>
        </Link>
      </div>
    )
  }
}
