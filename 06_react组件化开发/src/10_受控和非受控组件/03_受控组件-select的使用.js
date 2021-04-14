import React, { PureComponent } from 'react';
/**
 * input(text,radio,checkbox) textarea select
 * 受控组件
 */
export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      fruits: 'banner',
    };
  }

  render() {
    return (
      <div>
        <form action="" onSubmit={(e) => this.handleSubmit(e)}>
          <select name="fruits" id="" onChange={(e) => this.handleChange(e)} value={this.state.fruits}>
            <option value="apple">苹果</option>
            <option value="banner">香蕉</option>
          </select>
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
      fruits: e.target.value,
    });
  }
}
