import { UPDATE_START, START_COUNTER, UPDATE_USER } from "./startConstants";

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

export function updateUser(value){
    // console.log(topic, "inside action")
    return {
        type: UPDATE_USER,
        payload: value
    }
}