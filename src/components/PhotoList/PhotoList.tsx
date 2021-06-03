import './PhotoList.scss'
import React, {FC, useEffect} from "react";
import {PhotoElement} from "../PhotoElement/PhotoElement";
import {useAppDispatch, useAppSelector, usePages} from "../../hooks/hooks";
import {changePage, fetchList} from "../../redux/actions-ceratot";
import {Loading} from "../Loading/Loading";
import {Pagination} from "../Pagination/Pagination";
import {Filter} from "../Filter/Filter";

export const PhotoList: FC = () => {
  const dispatch = useAppDispatch();
  const {list, loading, currentPage, currentPageList} = useAppSelector(state => state.listPhotos);

  const pages: number[] = usePages(Math.ceil(list.length / 10), currentPage);

  const changePageHandler = ( page: number) => {
    if (page > 0 && page <= Math.ceil(list.length / 10)) {
      dispatch(changePage(page - 1));
    }
  }

  useEffect(() => {
    dispatch(fetchList());
  }, [dispatch])

  return(
      <div>
        {loading && <Loading/>}
        <Filter/>
        {currentPageList.map(item => {
          return (
            <PhotoElement
              key={item.id}
              title={item.title}
              id={item.id}
              albumId={item.albumId}
              thumbnailUrl={item.thumbnailUrl}
              url={item.url}
            />)
        })}
        {list.length > 0 && <Pagination pages={pages} changePageHandler={changePageHandler} currentPage={currentPage}/>}
      </div>
  );
};