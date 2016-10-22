/**
 * 商品详情Action
 */

import * as actionTypes from '../constants/actionTypes';
import {HOST} from  '../constants/request';
// import { toastShort } from '../utils/toastUtil';

export function getGoodsDetail(prod_id){

    return (dispatch) => {
        dispatch({'type':actionTypes.GET_getGoodsDetail_ING}); //派发任务
        fetch(HOST+'product/productDetail?id='+ prod_id)
            .then((response) => response.json())
            .then((responseData)=>{     
                console.log(responseData)           
                if (responseData.status) {
                    dispatch({
                        type:actionTypes.GET_getGoodsDetail_DOWN,
                        goodsDetail:responseData.data})
                };               
            })
            .catch((err) =>{
                // dispatch({type:actionTypes.GET_RECOM_GOODS_ERR,error:err})
                console.log(err)
            })
    }
}
