import React, { Component } from 'react';

function Header(props) {
  return (
    <div>
      <h2>用户昵称:{props.name}</h2>
      <h2>用户等级:{props.level}</h2>
    </div>
  );
}

function Profile(props) {
  return (
    <div>
      {/** 
    <Header name={props.name} level={props.level}/>
     * 
     */}
      <Header {...props} />
      <ul>
        <li>设置1</li>
        <li>设置2</li>
        <li>设置3</li>
        <li>设置4</li>
      </ul>
    </div>
  );
}

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'coder',
      level: 99,
    };
  }

  render() {
    const { name, level } = this.state;
    return (
      <div>
        {/* <Profile {...this.state}/> */}
        <Profile name={name} level={level} />
      </div>
    );
  }
}
