import React, { Component } from 'react';
//名字任取
import PropTypes from 'prop-types';
function ChildCpn(props) {
  const { names ,age} = props;
  return (
    <div>
      <h2>{age}</h2>
      <ul>
        {names.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </div>
  );
}



ChildCpn.propTypes = {
  //类型 必须传参数
  names: PropTypes.array.isRequired,
  age:PropTypes.number
};
ChildCpn.defaultProps={
  age:18,
  names:['1','2']
}
//数值型数据需要大括号包括
export default class App extends Component {
  render() {
    return (
      <div>
        <ChildCpn names={['why','whs']} age={18}/>
      </div>
    );
  }
}
