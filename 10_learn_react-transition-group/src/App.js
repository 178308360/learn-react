import React, { PureComponent } from 'react'

import CSSTransitionDemo from './transition/CSSTransitionDemo'
import SwitchTransition from './transition/SwitchTransitionDemo'
import TransitionGroupDemo from './transition/TransitionGroupDemo'

export default class App extends PureComponent {
  render() {
    return (
      <div style={{textAlign:'center'}}>
        <SwitchTransition/>
        <CSSTransitionDemo/>
        <TransitionGroupDemo></TransitionGroupDemo>
      </div>
    )
  }
}
