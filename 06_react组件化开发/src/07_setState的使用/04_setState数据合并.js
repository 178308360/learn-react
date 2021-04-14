import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       message:"nihao",
       name:'code'
    }
  }
  
  render() {
    return (
      <div>
        <h2>{this.state.name}</h2>
        <h2>{this.state.message}</h2>
          <button onClick={e=>this.changeText()}>变换</button>
      </div>
    )
  }

  changeText(){

    this.setState({
      message:'Hello'
    })
  }
  // 合并后两个对象到第一个参数中 
  // Object.assign({},{this.state},{message:"Hello"})
}

