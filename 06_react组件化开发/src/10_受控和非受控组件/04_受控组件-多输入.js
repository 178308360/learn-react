import React, { PureComponent } from 'react';
/**
 * input(text,radio,checkbox) textarea select
 * 受控组件
 */
export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      pws:''
    };
  }

  render() {
    return (
      <div>
        <form action="" onSubmit={(e) => this.handleSubmit(e)}>
            <div>
            <label htmlFor="username">
            用户:
            <input
              type="text"
              name="username"
              id="username"
              onChange={(e) => this.handleChange(e)}
              value={this.state.username}
            />
          </label>
            </div>
            <div>
            <label htmlFor="pws">
            密码:
            <input
              type="text"
              name="pws"
              id="pws"
              onChange={(e) => this.handleChange(e)}
              value={this.state.pws}
            />
          </label>
            </div>
          <input type="submit" value="提交" />
        </form>
      </div>
    );
  }
  handleSubmit(e) {
    e.preventDefault();
  }
  // handleChangeName(e) {
  //   this.setState({
  //     username: e.target.value,
  //   });
  // }
  // handleChangePws(e) {
  //   this.setState({
  //     pws: e.target.value,
  //   });
  // }
  handleChange(e){
    this.setState({
      //计算属性名
      [e.target.name]:e.target.value
    })
  }
}
