import { UPDATE_START, START_COUNTER } from "./startConstants";

export function updateStart(){
    // console.log(topic, "inside action")
    return {
        type: UPDATE_START,
        payload: true
    }
}

export function startCounter(value){
    // console.log(topic, "inside action")
    return {
        type: START_COUNTER,
        payload: value
    }
}