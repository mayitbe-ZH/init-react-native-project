import * as actionTypes from '../constants/actionTypes';

const initialState = {
    goodsListDataSource:[],
    status:null
}

export default function appMain(state = initialState, action){

    switch (action.type) {

        case actionTypes.GET_RECOM_GOODS_ING:
            return {
                ...state,
                status:'loading'
            };
        case actionTypes.GET_RECOM_GOODS_DOWN:
            return {
                ...state,
                goodsListDataSource:action.goodsListDataSource,
                status:'done'
            };
        case actionTypes.GET_RECOM_GOODS_ERR:
            return {
                ...state,
                msg:action.err,
                status:null
            };        
        default:
            return state;
    }
}