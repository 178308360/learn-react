import React, { PureComponent } from 'react'

import profileStyle from './style.module.css'
export default class index extends PureComponent {
  render() {
    return (
      <div className='profile'>
          <h2 className={profileStyle.title}>我是profile</h2>
          <div>profile内容</div>     
      </div>
    )
  }
}
