import React, { PureComponent } from 'react'
import Home from '../home'
import Profile from '../profile'
import styled ,{ThemeProvider}from 'styled-components';

const HYButton=styled.button`
  padding:10px 20px;
  border-color:red;
  color:red;
`
//继承
const HYPrimaryButton=styled(HYButton)`
  color:#fff;
`


export default class index extends PureComponent {
  render() {
    return (
   
      <div id='app'>
          <ThemeProvider theme={{themColor:'yellow',fontSize:'30px'}}>
           <p className>App</p>
          <Home></Home>
          <Profile></Profile>
          <HYButton>我是普通按钮</HYButton>
          <HYPrimaryButton>我是主要按钮</HYPrimaryButton>
           </ThemeProvider>
      </div>
    )
  }
}
