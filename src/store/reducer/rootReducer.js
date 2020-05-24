import { combineReducers } from "redux";
import authReducer from "./authReducer";
import projectReducer from "./projectReducer";

// 2. create a reducer...
// combine all reducers here

const rootReducer = combineReducers({
    auth: authReducer,
    project : projectReducer,

})

export default rootReducer;