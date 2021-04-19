import React, { PureComponent } from 'react';

// import {connect} from '../utils/connect';
import { connect } from 'react-redux';

import { addAction, fetchMultiDate} from '../store/counter/actionCreators';

class Home extends PureComponent {
  componentDidMount() {
    this.props.getHomeMultiDate();
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <h2>当前计数: {this.props.counter}</h2>
        <button onClick={(e) => this.props.increment()}>+1</button>
        <button onClick={(e) => this.props.addNumber(5)}>+5</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  counter: state.counterInfo.counter,
});

const mapDispatchToProps = (dispatch) => ({
  increment() {
    dispatch(addAction(1));
  },
  addNumber(num) {
    dispatch(addAction(num));
  },
  getHomeMultiDate() {
    // dispatch(getHomeMultiDate);
    dispatch(fetchMultiDate)
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
