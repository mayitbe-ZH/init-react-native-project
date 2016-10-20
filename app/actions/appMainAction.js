
import * as actionTypes from '../constants/actionTypes';


export function add(){

    return (dispatch) => {
        dispatch({'type':actionTypes.ADD_ING}); //派发任务
        fetch('http://www.baidu.com')
            .then((res)=>{
                dispatch({type:actionTypes.ADD_DONE,name:'add'})
            })
            .catch((err) =>{
                dispatch({type:actionTypes.ADD_ERR,error:err})
            })
    }
}

export function minus(){
    return {
        type:actionTypes.MINUS_DONE,
        name:'minus'    
    }
}


