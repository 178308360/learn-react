import React, { PureComponent } from 'react';

import {HomeWrapper,TitleWrapper} from './style'
export default class index extends PureComponent {
  render() {
    return (
      <HomeWrapper>
        <TitleWrapper >我是home</TitleWrapper>
        <div className="content">
          <ul>
            <li className='active'>1</li>
            <li>2</li>
          </ul>
        </div>
      </HomeWrapper>
    );
  }
}
