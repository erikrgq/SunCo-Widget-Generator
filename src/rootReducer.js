import { combineReducers } from "redux";
import integrationSlice from './slices/integrationSlice';
import optionsSlice from "./slices/optionsSlice";

export default combineReducers({
    integration: integrationSlice,
    options: optionsSlice
});