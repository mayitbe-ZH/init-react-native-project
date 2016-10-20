import * as actionTypes from '../constants/actionTypes';

const initialState = {
    couter:0
}

export default function appMain(state = initialState, action){

    switch (action.type) {

        case actionTypes.ADD_ING:
            return {
                ...state,
                status:'add_ing'
            };
        case actionTypes.ADD_DONE:
            return {
                ...state,
                name:action.name,
                couter:state.couter+1,
                status:'add_done'
            };
        case actionTypes.ADD_ERR:
            return {
                ...state,
                status:'err'
            };   
        case actionTypes.MINUS_DONE:    
            return {
                ...state,
                name:action.name,
                couter:state.couter-1,
                status:'minus_done'
            }
        default:
            return state;
    }
}

