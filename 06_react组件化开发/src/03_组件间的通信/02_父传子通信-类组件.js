import React, { Component } from 'react'

class ChildCpn extends Component {
  //默认构造函数,可以省略
  constructor(props) {
    super()
    this.state = {
       
    }
    console.log(this.props); //undefined
  }

  componentDidMount() {
    console.log(this.props); 
  }
  render() {
    console.log(this.props);
    const {name} =this.props
    return (
        <h2>子组件展示数据{name}</h2>
    )
  }
}

export default class App extends Component {
  render() {
    return (
      <div>
        <ChildCpn name="why"/>
        <ChildCpn name="ygq"/>
      </div>
    )
  }
}
