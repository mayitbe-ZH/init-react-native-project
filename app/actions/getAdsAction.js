
import * as actionTypes from '../constants/actionTypes';
import {HOST} from  '../constants/request';

export function getSwiperImg(position){ //position为位置

    return (dispatch) => {
        // dispatch({'type':actionTypes.GET_SwiperImg_ING}); //派发任务
        fetch('http://king.wedoyun.com/api.php/basic/ads')
            .then((response) => response.json())
            .then((responseData)=>{
                if (responseData.status) {
                    let index_Img_swper = [];
                    responseData.data.map(function(item) {
                        if ( item.ad_position == position ) {
                            index_Img_swper.push(item)
                        }
                    })
                    dispatch({
                        type:actionTypes.GET_SwiperImg_DOWN,
                        index_Img_swper:index_Img_swper})
                };               
            })
            .catch((err) =>{
                dispatch({type:actionTypes.GET_SwiperImg_ERR,error:err})
            })
    }
}