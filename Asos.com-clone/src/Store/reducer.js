
import { AUTH } from './actionTypes'

const initState = {auth:false}

const reducer = (state=initState, action) => {
    switch(action.type){
        case AUTH : return {...initState, auth:action.payload};
        default : return state;
    }
  
}


export {reducer};
