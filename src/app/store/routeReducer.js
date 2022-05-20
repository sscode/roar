import { combineReducers } from "redux";
import startReducer from "../../features/Home/startReducer";

const rootReducer = combineReducers({
    data: startReducer
})

export default rootReducer;