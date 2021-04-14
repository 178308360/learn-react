import React, { Component } from 'react';

//创建context对象,参数为默认Provide
const UserContext = React.createContext({
  name: 'coder',
  level: 99,
});
const ThemeContext = React.createContext();
function Header() {
  return (
    <UserContext.Consumer>
      {(value) => {
        return (
          <ThemeContext.Consumer>
            {(theme) => {
              return (
                <div>
                  <h2 style={{ color: theme.color }}>用户名:{value.name}</h2>
                  <h2>用户等级:{value.level}</h2>
                </div>
              );
            }}
          </ThemeContext.Consumer>
        );
      }}
    </UserContext.Consumer>
  );
}

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
          <ThemeContext.Provider value={{ color: 'red' }}>
            <Profile />
          </ThemeContext.Provider>
        </UserContext.Provider>
      </div>
    );
  }
}
