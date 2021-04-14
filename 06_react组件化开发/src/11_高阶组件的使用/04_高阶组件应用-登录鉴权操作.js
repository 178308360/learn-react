import React, { PureComponent } from 'react'

class LoginPage extends PureComponent{

}

function withAuth(WrapComponent){
   const NewsCpn=props=>{
    const {isLogin}=props
    if(isLogin){
      return <WrapComponent {...props}/>
    }else{
      return <LoginPage/>
    }
  }
  return NewsCpn
}

class CarPage extends PureComponent {
  render() {
    return (
      <div>
        <h2>Carpage</h2>
      </div>
    )
  }
}
const AuthCarPage=withAuth(CarPage)
export default class App extends PureComponent {
  render() {
    return (
      <div>
        <AuthCarPage isLogin={true}></AuthCarPage>
      </div>
    )
  }
}
