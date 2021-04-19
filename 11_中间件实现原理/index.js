import store from './store/index.js';
import { addAction } from './store/actionCreators.js';
//订阅store的修改
// store.subscribe(()=>{
//   console.log('counter:',store.getState().counter);
// })

//派发action

//1.基本做法
console.log('dispatch action前:', addAction(10));
store.dispatch(addAction(10));
console.log('dispatch action后:', store.getState());
//2.封装一个函数
function dispatchAndLogging(action) {
  console.log('dispatch action前:', action);
  store.dispatch(action);
  console.log('dispatch action后:', store.getState());
}
dispatchAndLogging(addAction(10));
//3.函数基础之上优化,修改原有的dispatch
const next=store.dispatch
function dispatchAndLogging(action) {
  console.log('dispatch action前:', action);
  next(action);
  console.log('dispatch action后:', store.getState());
}
store.dispatch=dispatchAndLogging
store.dispatch(addAction(10))

//4.将之前的操作进行封装
function patchLogging(store){
  const next=store.dispatch
  function dispatchAndLogging(action) {
  console.log('dispatch action前:', action);
  next(action);
  console.log('dispatch action后:', store.getState());
}
  store.dispatch=dispatchAndLogging
}
patchLogging(store)
store.dispatch(addAction(10))
//封装patchThunk的功能
function patchThunk(store){
  const next=store.dispatch
  function dispatchAndThunk(action){
    if (typeof action==='function'){
      action(store.dispatch,store.getState)
    }else{
      next(action)
    }
  }
  store.dispatch=dispatchAndThunk
}
patchThunk(store)
function foo(dispatch,getState){
  console.log(dispatch,getState);
  dispatch(addAction(10))
}
store.dispatch(foo)

//5.封装applyMiddleware
function applyMiddleware(...middlewares){
    middlewares.forEach(middleware=>{
      middleware(store)
    })
}
applyMiddleware(patchLogging,patchThunk)