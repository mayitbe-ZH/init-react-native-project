import * as actionTypes from '../constants/actionTypes';

const initialState = {
    index_Img_swper:[]
}

export default function getAdsReducer(state = initialState, action){

    switch (action.type) {

        case actionTypes.GET_SwiperImg_DOWN:
            return {
                ...state,
                index_Img_swper:action.index_Img_swper,
                status:'down'
            };
        case actionTypes.GET_SwiperImg_ERR:
            return {
                ...state,
                msg:action.error,
                status:'error'
            };    
        default:
            return state;
    }
}

