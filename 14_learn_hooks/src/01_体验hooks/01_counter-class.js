import React, { PureComponent } from 'react'

export default class Counterclass extends PureComponent {
  constructor(props) {
    super(props)
  
    this.state = {
       counter:0
    }
  }
  
  render() {
    return (
      <div>
        <h2>当前技术:{this.state.counter}</h2>
        <button onClick={e=>{
          this.setState({
            counter:this.state.counter+1
          })
        }}>+1</button>
      </div>
    )
  }
}
