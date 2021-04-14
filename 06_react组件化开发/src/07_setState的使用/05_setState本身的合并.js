import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count:0
    }
  }
  
  render() {
    return (
      <div>
          <h2>{this.state.count}</h2>
          <button onClick={e=>this.increment()}>+1</button>
      </div>
    )
  }
  //
  increment(){
    //setState本身被合并
    // this.setState({
    //   count:this.state.count+1
    // })
    // this.setState({
    //   count:this.state.count+1
    // })
    // this.setState({
    //   count:this.state.count+1
    // })
    //不合并
    this.setState( (prevState,props)=>{
      return {
        count:prevState.count+1
      }
    })
    this.setState( (prevState,props)=>{
      return {
        count:prevState.count+1
      }
    })
    this.setState( (prevState,props)=>{
      return {
        count:prevState.count+1
      }
    })
  }
}
