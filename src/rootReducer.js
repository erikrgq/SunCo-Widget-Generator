import { combineReducers } from "redux";
import smoochOpen from "./slices/smoochOpen";
import integrationSlice from './slices/integrationSlice';
import optionsSlice from "./slices/optionsSlice";
import advancedStyling from "./slices/advancedStyling";
import nativeWdiget from "./slices/nativeWdiget";

export default combineReducers({
    integration: integrationSlice,
    options: optionsSlice,
    smoochOpen: smoochOpen,
    advancedStyling: advancedStyling,
    nativeWidget: nativeWdiget
});