import * as actionTypes from '../constants/actionTypes';

const initialState = {
    selectedTab:'home'
}

export default function appMain(state = initialState, action){

    switch (action.type) {

        case actionTypes.SELECTED_TAB:
            return {
                ...state,
                selectedTab:action.selectedTab
            };
        default:
            return state;
    }
}

