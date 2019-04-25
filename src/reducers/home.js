import {GET_THEME_TOUR} from '../actionTypes/home';
let initValue = [];
export default (state=initValue,action)=>{
    switch(action.type){
        case GET_THEME_TOUR:
            return action.data;
        default :
            return state;
    }
}