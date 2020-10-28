import {combineReducers} from "redux";
import liberityReducer from './liberityReducer';
import ProfileReducer from './ProfileReducer';

const RootReducer=combineReducers({
    liberity:liberityReducer,
    profile:ProfileReducer
});

export default RootReducer;