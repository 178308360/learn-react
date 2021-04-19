//导入redux
import redux from 'redux'
import reducer from './reducer.js'


//store
const store = redux.createStore(reducer);


export default store