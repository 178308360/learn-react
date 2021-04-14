import React, { Component } from 'react';

//创建context对象,参数为默认Provide
const UserContext = React.createContext({
  name: 'coder',
  level: 99,
});

class Header extends Component {
  render() {
    console.log(this.context);
    return (
      <div>
        <h2>用户昵称:{this.context.name}</h2>
        <h2>用户等级:{this.context.level}</h2>
      </div>
    );
  }
}
Header.contextType = UserContext;

function Profile() {
  return (
    <div>
      <Header />
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
      name: 'yg',
      level: 100,
    };
  }

  render() {
    return (
      <div>
        <UserContext.Provider value={this.state}>
          <Profile />
        </UserContext.Provider>
      </div>
    );
  }
}
