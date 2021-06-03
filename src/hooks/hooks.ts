import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import {AppDispatch, RootState} from "../index";

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const usePages = (pagesCount: number, currentPage: number) => {
  const pages = []
  if(pagesCount > 10) {
    if(currentPage > 5) {
      for (let i = currentPage-4; i <= currentPage+5; i++) {
        pages.push(i)
        if(i === pagesCount) break
      }
      return pages
    }
    else {
      for (let i = 1; i <= 10; i++) {
        pages.push(i)
        if(i === pagesCount) break
      }
      return pages
    }
  }  else {
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
    }
    return pages
  }
}