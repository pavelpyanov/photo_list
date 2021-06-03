import {call, put, takeEvery} from 'redux-saga/effects'
import axios from "axios";
import {IFilterList, ListActionTypes} from "../types";
import {clearList, fetchListError, fetchListSuccess} from "../actions-ceratot";


export function* listFetchWorker() {
  try {
    yield put(clearList())
    const { data } = yield call(axios.get, 'https://jsonplaceholder.typicode.com/photos')
    yield put(fetchListSuccess(data))
  } catch (e) {
    yield put(fetchListError())
  }
}

export function* listFetchWatcher() {
  yield takeEvery(ListActionTypes.FETCH_LIST, listFetchWorker)
}

export function* listFilterFetchWorker({ payload }: IFilterList) {
  if (payload) {
    const urlFilter = `https://jsonplaceholder.typicode.com/albums/${payload}/photos`
    try {
      yield put(clearList())
      const { data } = yield call(axios.get, urlFilter)
      yield put(fetchListSuccess(data))
    } catch (e) {
      yield put(fetchListError())
    }
  }
  }


export function* listFilterFetchWatcher() {
  yield takeEvery(ListActionTypes.FILTER_LIST, listFilterFetchWorker)
}
