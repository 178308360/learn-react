import React, { PureComponent, createContext } from 'react';

function WithUser(WrapComponent){
  return props=>{
    return(
      <UserContext.Consumer>
      {(user) => {
        return (
            <WrapComponent {...props} {...user}></WrapComponent>
        );
      }}
    </UserContext.Consumer>
    )
  }
}

const UserContext = createContext({
  name: '默认',
  level: -1,
  区域: '中国',
});

class Home extends PureComponent {
  render() {
    return (
      <div>
              <h2>
                home:
                {`昵称 ${this.props.name} 等级 ${this.props.level} 区域:${this.props.region}`}
              </h2>
      </div>
    );
  }
}
const UserHome=WithUser(Home)
class App extends PureComponent {
  render() {
    return (
      <div>
        <UserContext.Provider value={{name:'li',level:1,region:'中国'}}>
          <UserHome/> 
        </UserContext.Provider>
      </div>
    );
  }
}

export default App;
