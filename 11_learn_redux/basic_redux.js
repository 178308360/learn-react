//导入redux
//commonjs实现
const redux = require('redux');
const initialState = {
  counter: 0,
};

//reducer纯函数

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INC':
      return {...state,counter:state.counter+1}
    case 'DEC':
      return {...state,counter:state.counter-1}
    case 'ADD_NUMBER':
      return {...state,counter:state.counter+action.num}
    default:
      return state
  }


}

//store
const store = redux.createStore(reducer);

//action
const action1 = { type: 'INC' };
const action2 = { type: 'DEC' };
const action3 = { type: 'ADD_NUMBER', num: 5 };

//订阅store的修改
store.subscribe(()=>{
  console.log('counter:',store.getState().counter);
})

//派发action
store.dispatch(action1);
store.dispatch(action2);
store.dispatch(action3);


