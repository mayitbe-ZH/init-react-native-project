import {combineReducers} from 'redux';
import appMain from './appMainReducer';
import home from './homeReducer';
import goodsDetail from './getGoodsDetailReducer';
import getAds from './getAdsReducer';
import login from './loginReducer';

const rootReducer = combineReducers({
      appMain,  //,后面添加reducer,
      home,
      goodsDetail,
      getAds,
      login
})

export default rootReducer;