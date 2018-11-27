import profileReducer from "./profile";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
	profile: profileReducer
});

export default rootReducer;
