
import {CHANGE_BANNER,CHANGE_RECOMMENDS} from './constants.js'
const initialHomeState={
  banners:[],
  recommends:[]
}
function homeReducer(state=initialHomeState,action){
  switch (action.type) {
    case CHANGE_BANNER:
      return {...state,banners:action.banner}
    case CHANGE_RECOMMENDS:
      return {...state,recommends:action.recommend}
    default:
      return state
}}

export default homeReducer