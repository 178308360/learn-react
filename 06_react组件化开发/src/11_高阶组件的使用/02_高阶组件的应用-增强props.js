import React, { PureComponent } from 'react'


class Home extends PureComponent {
  render() {
    return (
      <div>
        <h2>home:{`昵称 ${this.props.name} 等级 ${this.props.level} 区域:${this.props.region}`}</h2>
      </div>
    )
  }
}

function enhanceComponent(WrapComponent){
  return props=>{
    return <WrapComponent {...props} region='中国'/>
  }
}
const EnhanceComponent=enhanceComponent(Home)

class App extends PureComponent {
  render() {
    return (
      <div>
          <EnhanceComponent name='www' level={90}/>
      </div>
    )
  }
}


export default App
