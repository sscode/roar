import { UPDATE_START, START_COUNTER, UPDATE_USER } from "./startConstants";

const initialState = {
    start: false,
    time: false,
    user: ""
}

export default function startReducer(state = initialState, {type, payload}){
    switch(type){
        case UPDATE_START:
            // console.log(payload, "inside reducer")
            return {
                ...state,
                start: payload
            };
        case START_COUNTER:
            // console.log(payload, "inside reducer")
            return {
                ...state,
                time: payload
            };
        case UPDATE_USER:
            // console.log(payload, "inside reducer")
            return {
                ...state,
                user: payload
            };
        default:
            return state;
    }
}