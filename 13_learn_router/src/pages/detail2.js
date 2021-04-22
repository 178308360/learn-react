import React, { PureComponent } from 'react'

export default class detail2 extends PureComponent {
  render() {
    console.log(this.props.location.search);
    return (
      <div>
          detail2
      </div>
    )
  }
}
