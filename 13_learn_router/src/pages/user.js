import React, { PureComponent } from 'react'
import { Redirect } from 'react-router'

export default class User extends PureComponent {
  constructor(props) {
    super(props)
  
    this.state = {
       isLogin:false
    }
  }
  
  render() {
    // 跳转到相应链接
    return (
      this.state.isLogin ?(
        <div>
        <h2>user</h2>
      </div>
      ):<Redirect to='/login' ></Redirect>
    
    )
  }
}
