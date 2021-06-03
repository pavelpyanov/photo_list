import {IChangeFilter, IChangePage, IFetchList, IFetchListSuccess, IFilterList, ListActionTypes} from "./types";

export const fetchList = (): IFetchList => {
  return {
    type: ListActionTypes.FETCH_LIST
  }
}
export const filterList = (str: string): IFilterList => {
  return {
    type: ListActionTypes.FILTER_LIST,
    payload: str
  }
}
export const fetchListSuccess = (list: []): IFetchListSuccess => {
  return {
    type: ListActionTypes.FETCH_LIST_SUCCESS,
    payload: list
  }
}
export const fetchListError = () => {
  return {
    type: ListActionTypes.FETCH_LIST_ERROR,
    payload: 'Ошибка при загрузке'
  }
}
export const clearList = () => {
  return {
    type: ListActionTypes.CLEAR_LIST
  }
}
export const changePage = (number: number): IChangePage => {
  return {
    type: ListActionTypes.CHANGE_PAGE,
    payload: number
  }
}
export const changeFilter = (str: string): IChangeFilter => {
  return {
    type: ListActionTypes.CHANGE_FILTER,
    payload: str
  }
}