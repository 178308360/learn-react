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
    };
  }

  render() {
    return (
      <div>
        <form action="" onSubmit={(e) => this.handleSubmit(e)}>
          <label htmlFor="username">
            用户:
            <input
              type="text"
              name=""
              id="username"
              onChange={(e) => this.handleChange(e)}
              value={this.state.username}
            />
          </label>
          <input type="submit" value="提交" />
        </form>
      </div>
    );
  }
  handleSubmit(e) {
    e.preventDefault();
  }
  handleChange(e) {
    this.setState({
      username: e.target.value,
    });
  }
}
