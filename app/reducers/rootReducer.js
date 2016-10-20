import {combineReducers} from 'redux';
import appMain from './appMainReducer'
const rootReducer = combineReducers({
      appMain  //,后面添加reducer
})

export default rootReducer;