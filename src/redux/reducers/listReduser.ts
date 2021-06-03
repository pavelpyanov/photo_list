import {
  IChangeFilter,
  IChangePage,
  IClearList,
  IFetchList,
  IFetchListError,
  IFetchListSuccess, IFilterList,
  IListState,
  ListActionTypes
} from "../types";

type ListAction = IFetchList | IFetchListSuccess | IFetchListError | IChangePage | IClearList | IChangeFilter | IFilterList

const initialState: IListState = {
  list : [],
  loading: false,
  error: null,
  currentPage: 0,
  currentPageList: [],
  filter: ''
}

export const listReducer = (state:IListState = initialState, action: ListAction): IListState => {
  switch (action.type) {
    case ListActionTypes.FETCH_LIST:
      return { ...state, loading: true }

    case ListActionTypes.FETCH_LIST_SUCCESS:
      return {
        ...state,
        list: action.payload,
        loading: false,
        currentPage: 0,
        currentPageList: action.payload.slice(0, 10)
      }

    case ListActionTypes.FETCH_LIST_ERROR:
      return {...state,  list: [], loading: false, error: action.payload }

    case ListActionTypes.CHANGE_PAGE:
      return {
        ...state,
        currentPage: action.payload,
        currentPageList: state.list.slice(action.payload * 10, action.payload * 10 + 10)
      }

    case ListActionTypes.CHANGE_FILTER:
      return {...state, filter: action.payload}

    case ListActionTypes.CLEAR_LIST:
      return {...state, ...initialState}

    default:
      return state
  }
}