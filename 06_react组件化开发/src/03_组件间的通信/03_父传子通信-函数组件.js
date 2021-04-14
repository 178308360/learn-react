import React, { Component } from 'react'

function ChildCpn(props){
  const {name}=props
  return <h2>{name}</h2>
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
