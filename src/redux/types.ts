export interface IListState{
  list: any[]
  loading: boolean
  error: null | string
  currentPage: number
  currentPageList: any[]
  filter: string
}

export enum ListActionTypes{
  FETCH_LIST = 'FETCH_LIST',
  FETCH_LIST_SUCCESS = 'FETCH_LIST_SUCCESS',
  FETCH_LIST_ERROR = 'FETCH_LIST_ERROR',
  CHANGE_PAGE = 'CHANGE_PAGE',
  CLEAR_LIST = 'CLEAR_LIST',
  CHANGE_FILTER = 'CHANGE_FILTER',
  FILTER_LIST = 'FILTER_LIST',
}

export interface IChangeFilter {
  type: ListActionTypes.CHANGE_FILTER,
  payload: string
}
export interface IFetchList {
  type: ListActionTypes.FETCH_LIST
}
export interface IFilterList{
  type: ListActionTypes.FILTER_LIST,
  payload: string
}
export interface IFetchListSuccess {
  type: ListActionTypes.FETCH_LIST_SUCCESS
  payload: []
}
export interface IFetchListError {
  type: ListActionTypes.FETCH_LIST_ERROR
  payload: string
}
export interface IChangePage {
  type: ListActionTypes.CHANGE_PAGE,
  payload: number
}
export interface IClearList {
  type: ListActionTypes.CLEAR_LIST
}
export interface IListItem{
  id: boolean
  albumId: boolean
  title: string
  url: string
  thumbnailUrl: string
}
