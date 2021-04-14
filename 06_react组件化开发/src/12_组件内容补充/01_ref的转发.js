import React, { PureComponent, createRef, forwardRef } from 'react';

class Home extends PureComponent {
  render() {
    return (
      <div>
        <h2>home</h2>
      </div>
    );
  }
}

const Profile = forwardRef(function Profile(props,ref) {
  return <h2 ref={ref}>profile</h2>;
});

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.titleRef = createRef();
    this.HomeRef = createRef();
    this.ProfileRef = createRef();
    this.state = {};
  }

  render() {
    return (
      <div>
        <h2 ref={this.titleRef}>Hello</h2>
        <Home ref={this.HomeRef}></Home>
        {/* 函数组件不能使用ref */}
        <Profile ref={this.ProfileRef}></Profile>
        <button onClick={(e) => this.printRef()}>打印</button>
      </div>
    );
  }
  printRef() {
    console.log(this.titleRef.current);
    console.log(this.HomeRef.current);
    console.log(this.ProfileRef.current);
  }
}
