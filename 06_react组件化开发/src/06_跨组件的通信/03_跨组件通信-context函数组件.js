import React, { Component } from 'react';

//创建context对象,参数为默认Provide
const UserContext = React.createContext({
  name: 'coder',
  level: 99,
});

function Header(){
  return(
    <UserContext.Consumer>
      {
        value=>{
           return (
             <div>
               <h2>用户名:{value.name}</h2>
               <h2>用户等级:{value.level}</h2>
             </div>
           )
        }
      }
    </UserContext.Consumer>
  )

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
          <Profile />
        </UserContext.Provider>
      </div>
    );
  }
}
