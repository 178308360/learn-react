import React, { Component,Fragment } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count:0,
       fis:[{
         name:'1',age:1
       },{
        name:'2',age:2
      }]
    }
  }
  
  render() {
    return (
      //不渲染Fragment元素,代替div
      // <Fragment>
      //     <h2>{this.state.count}</h2>
      //     <button onClick={e=>this.increment()}>+1</button>
      // </Fragment>
      //短语法,不能使用任何属性
      <>
      <h2>{this.state.count}</h2>
      <button onClick={e=>this.increment()}>+1</button>
      <div>
        {
          this.state.fis.map(item=>{
              return (
                <Fragment key={item.name}>
                  <div>{item.name}</div>
                  <p>{item.age}</p>
                  <hr/>
                </Fragment>
              )
          })
        }
      </div>
      </>
    )
  }
  increment(){
    this.setState({
      count:this.state.count+1
    })
  }
}
