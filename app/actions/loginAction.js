
import * as actionTypes from '../constants/actionTypes';
import {HOST} from  '../constants/request';

export function loginAction(username,password){

    return (dispatch) => {
        dispatch({'type':actionTypes.LOGIN_ING}); //派发任务
        fetch(HOST+'login/loginIn',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                type: 1,
                user_name: username,
                password: password,                
            })
        })
        .then((response) => response.json())
        .then((responseData)=>{
            console.log(responseData);
            if(responseData.status){
                dispatch({type:actionTypes.LOGIN_DONE,result:responseData})
            }else{
                dispatch({type:actionTypes.LOGIN_ERR,error:responseData})
            }
            
        })
        // .catch((err) =>{
        //     dispatch({type:actionTypes.LOGIN_ERR,error:err})
        // })
    }
}




