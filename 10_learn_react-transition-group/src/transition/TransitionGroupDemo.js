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
      <TransitionGroup>
       {
         this.state.names.map((item,index)=>{
           return (
             <CSSTransition key={item}
             timeout={300}
             classNames='item'
             >

             <div >{item}
             <button onClick={e=>this.removeItem(index)}>-</button>
             </div>
             </CSSTransition>
           )
         })
       }
       <button onClick={e=>this.addName()}>+</button>
      </TransitionGroup>

    )
  }
  addName(){
    this.setState({
      names:[...this.state.names,'code']
    })
  }
  removeItem(index){
    const newNames=[...this.state.names];
    newNames.splice(index,1)
    this.setState({
      names:newNames
    })
  }
}
