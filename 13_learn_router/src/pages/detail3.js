import React, { PureComponent } from 'react'

export default class detail3 extends PureComponent {
  render() {
    return (
      <div>
        name:{this.props.location.state.name}
      </div>
    )
  }
}
