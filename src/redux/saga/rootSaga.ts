import { all } from "redux-saga/effects";
import {listFetchWatcher, listFilterFetchWatcher} from "./listSaga";

export function* rootSaga() {
  yield all([
    listFetchWatcher(),
    listFilterFetchWatcher()
  ])
}