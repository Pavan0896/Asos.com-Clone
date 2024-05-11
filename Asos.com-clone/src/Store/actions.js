import { AUTH} from "./actionTypes"

export const authAction = (payload)=>{
    return {type:AUTH, payload:payload
    }
}