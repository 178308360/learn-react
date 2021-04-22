import React, { PureComponent } from 'react'

export default class detail extends PureComponent {
  render() {
    const match=this.props.match
    return (
      <div>
        detail:{match.params.id}
      </div>
    )
  }
}
