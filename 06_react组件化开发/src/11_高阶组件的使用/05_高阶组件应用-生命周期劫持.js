import React, { PureComponent } from 'react';

class Home extends PureComponent {
  render() {
    return (
      <div>
        <h2>home</h2>
      </div>
    );
  }
 
}

function withRenderTime(WrapComponent){
  return class extends PureComponent{
    componentWillMount(){
      this.beginTime=Date.now()
    }
    render() {
      return (
        <WrapComponent {...this.props}></WrapComponent>
      )
    }
    componentDidMount(){
      this.endTime=Date.now()
      const inteval=this.endTime-this.beginTime
      console.log(`${WrapComponent.name}渲染时间 ${inteval}`);
    }
  }
}
const TimeHome=withRenderTime(Home)
class App extends PureComponent {
  render() {
    return (
      <div>
        <TimeHome />
      </div>
    );
  }
}
export default App;
