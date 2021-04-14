import React, { PureComponent } from 'react'

class App extends PureComponent {
  render() {
    return (
      <div>
        App
        <h2>{this.props.name}</h2>
      </div>
    )
  }
}
// App.displayName='code'
function enhanceComponent(WrapComponent){

  // class NewsComponent extends PureComponent{
  //   render() {
  //     return (
  //       <WrapComponent {...this.props}></WrapComponent>
  //     )
  //   }
  // }
  function NewsComponent(props){
    return  <WrapComponent {...props}></WrapComponent>
  }
  NewsComponent.displayName='News'
  return NewsComponent
}
const EnhanceComponent=enhanceComponent(App)

export default EnhanceComponent