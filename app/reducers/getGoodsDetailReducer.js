import * as actionTypes from '../constants/actionTypes';

const initialState = {
    goodsDetail:{},
    status:null
}

export default function goodsDetail(state = initialState, action){

    switch (action.type) {

        case actionTypes.GET_getGoodsDetail_ING:
            return {
                ...state,
                status:'loading'
            };
        case actionTypes.GET_getGoodsDetail_DOWN:
            return {
                ...state,
                goodsDetail:action.goodsDetail,
                status:'down'
            };
       
        default:
            return state;
    }
}