import React, { PureComponent } from 'react';

import styled from 'styled-components';
/**
 * 特点
 * 1.props穿透
 * 2.attrs的使用
 * 3.传入state作为props属性 
 *
 */
const HyProfileInput = styled.input.attrs({
  placeholder: 'coderwuy',
  bColor: 'red',
})`
  background-color: blue;
  border-color: ${(props) => props.bColor};
  color:${props=>props.color};
`;

export default class index extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      color: 'red',
    };
  }

  render() {
    return (
      <div className="profile">
        <HyProfileInput type="password" color={this.state.color}></HyProfileInput>
        <h2 className="">我是profile</h2>
        <div>profile内容</div>
      </div>
    );
  }
}
