import {CHANGE_BANNER,CHANGE_RECOMMENDS,FETCH} from './constants.js'
import axios from 'axios'
export const changeBannerAction=(banner)=>({
  type:CHANGE_BANNER,
  banner
})
export const changeRecommendsAction=(recommend)=>({
  type:CHANGE_RECOMMENDS,
  recommend
})

//redux-thunk函数
export  const getHomeMultiDate=(dispatch,getState)=>{
  axios({
    url: 'http://123.207.32.32:8000/home/multidata',
  }).then((res) => {
    const data = res.data.data;
    dispatch(changeBannerAction(data.banner.list))
    dispatch(changeRecommendsAction(data.recommend.list))
  });
}

//redux-saga
export const fetchMultiDate={
  type:FETCH,
}