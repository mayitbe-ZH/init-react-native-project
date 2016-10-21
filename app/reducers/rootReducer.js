import {combineReducers} from 'redux';
import appMain from './appMainReducer';
import home from './homeReducer';
const rootReducer = combineReducers({
      appMain,  //,后面添加reducer,
      home
})

export default rootReducer;