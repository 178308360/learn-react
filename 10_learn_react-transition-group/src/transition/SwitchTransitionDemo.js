import React, { PureComponent } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group';

export default class SwitchTransitionDemo extends PureComponent {
  constructor(props) {
    super(props)
  
    this.state = {
       isOn:true
    }
  }
  /**
   * 新旧组件的替换
   */
  render() {
    return (
      <div>
        {/* mode默认是 out-in */}
        <SwitchTransition mode="out-in">
          <CSSTransition key={this.state.isOn? 'On':'off'} classNames='btn' timeout={300}>
            <button
            onClick={e=>this.setState({
              isOn:!this.state.isOn
            })} 
            >{this.state.isOn? 'On':'off'}</button>
          </CSSTransition>
        </SwitchTransition>
      </div>
    )
  }
}
