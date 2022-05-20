import { UPDATE_START, START_COUNTER } from "./startConstants";

const initialState = {
    start: false,
    time: false
}

export default function startReducer(state = initialState, {type, payload}){
    switch(type){
        case UPDATE_START:
            // console.log(payload, "inside reducer")
            return {
                start: payload
            };
        case START_COUNTER:
            // console.log(payload, "inside reducer")
            return {
                start: true,
                time: payload
            };
        default:
            return state;
    }
}