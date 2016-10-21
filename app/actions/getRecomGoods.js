
import * as actionTypes from '../constants/actionTypes';
import {HOST} from  '../constants/request';
import {ListView} from 'react-native';

export function getRecomGoods(){

    return (dispatch) => {
        dispatch({'type':actionTypes.GET_RECOM_GOODS_ING}); //派发任务
        fetch('http://king.wedoyun.com/api.php/product/recommendProducts?'+'pageIndex='+ 1 +'&pageSize=' + 4)
            .then((response) => response.json())
            .then((responseData)=>{                
                if (responseData.status) {
                    dispatch({
                        type:actionTypes.GET_RECOM_GOODS_DOWN,
                        goodsListDataSource:responseData.data.rows})
                };               
            })
            .catch((err) =>{
                dispatch({type:actionTypes.GET_RECOM_GOODS_ERR,error:err})
            })
    }
}




