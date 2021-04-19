import {all, put, takeEvery} from 'redux-saga/effects'
import {FETCH} from './constants'
import axios from 'axios'

import {changeBannerAction,changeRecommendsAction} from './actionCreators'
function* fetchHomeMultidata(action){
  const res=yield axios.get('http://123.207.32.32:8000/home/multidata')
  // yield put(changeBannerAction(res.data.banner.list)) 
  // yield put(changeRecommendsAction(res.data.recommend.list)) 
  yield all(
    [
       yield put (changeBannerAction(res.data.banner.list)),
       yield put (changeRecommendsAction(res.data.recommend.list))
    ]
  )
}

function * mySaga(){
  //takeLatest 一次只能监听一个action
  //takeEvery 监听每一个
    yield takeEvery(FETCH,fetchHomeMultidata)
    // yield all([
    // yield takeEvery(FETCH,fetchHomeMultidata),
    // ])
}

export default  mySaga