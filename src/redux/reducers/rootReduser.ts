import {combineReducers} from "redux";
import {listReducer} from "./listReduser";

export const rootReducer = combineReducers({
    listPhotos: listReducer
  });
