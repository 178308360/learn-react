import React, { PureComponent } from 'react'


import homeStyle from './style.module.css'
export default class index extends PureComponent {
  render() {
    return (
      <div className='home'>
          <h2 className={homeStyle.title}>我是home</h2>
          <div className='content'>home内容</div>            
      </div>
    )
  }
}
