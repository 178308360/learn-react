import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       message:"nihao"
    }
  }
  
  render() {
    return (
      <div>
          <button id='btn'>变换</button>
      </div>
    )
  }
  //在原生dom中为同步
  componentDidMount() {
    document.getElementById('btn').addEventListener('click',()=>{
      this.setState({
        message:'你好'
      })
      console.log(this.state.message);
    })
  }
  
  
  changeText(){
   //1.将setState放入计时器中
   setTimeout(() => {
     this.setState({
       message:'你好'
     })
     console.log(this.state.message);
   }, 0)
  }
}
