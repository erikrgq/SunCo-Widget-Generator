import { combineReducers } from "redux";
import smoochOpen from "./slices/smoochOpen";
import integrationSlice from './slices/integrationSlice';
import optionsSlice from "./slices/optionsSlice";

export default combineReducers({
    integration: integrationSlice,
    options: optionsSlice,
    smoochOpen: smoochOpen
});