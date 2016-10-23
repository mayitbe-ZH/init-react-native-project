import * as actionTypes from '../constants/actionTypes';


const initialState = {
    username:'',
    password:'',
    isLogin:false,
    status:null
}

export default function login(state = initialState, action){

    switch (action.type) {

        case actionTypes.LOGIN_ING:
            return {
                ...state,
                isLogin:false,status:'doing'
            };
        case actionTypes.LOGIN_DONE:
            return {
                ...state,
                result:action.result,
                isLogin:true,status:'down'
            };
        case actionTypes.LOGIN_ERR:
            return {
                ...state,
                error:action.error,
                isLogin:false,status:null
            };        
        default:
            return state;
    }
}

