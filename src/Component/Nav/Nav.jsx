import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Nav extends Component {
  render() {
    return (
      <div>
        <Link to={"/"}>
          <p>Home</p>
        </Link>
        <Link to={"/house/create"}>
          <p>Create House</p>
        </Link>
      </div>
    )
  }
}
