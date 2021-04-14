import React, { PureComponent } from 'react'
import Home from '../home'
import Profile from '../profile'
import './style.css'
export default class index extends PureComponent {
  render() {
    return (
      <div id='app'>
          <p className='title'>App</p>
          <Home></Home>
          <Profile></Profile>
      </div>
    )
  }
}
