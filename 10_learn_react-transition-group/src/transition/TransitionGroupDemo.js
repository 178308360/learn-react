import React, { PureComponent } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

export default class TransitionGroupDemo extends PureComponent {
  constructor(props) {
    super(props)
  
    this.state = {
       names:['1','2','3']
    }
  }
  
  render() {
    return (
      <div>
       {
         this.state.names.map((item,index)=>{
           return (
             <CSSTransition key={index}>
             <div >{item}</div>
             </CSSTransition>
           )
         })
       }
       <button onClick={e=>this.addName()}>+</button>
      </div>

    )
  }
  addName(){
    this.setState({
      names:[...this.state.names,'code']
    })
  }
}
