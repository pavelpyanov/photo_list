import React, {FC} from "react";
import './PhotoElement.scss';
import {IListItem} from "../../redux/types";

export const PhotoElement: FC<IListItem> = (item: IListItem) => {
  return(
    <div className='photo'>
      <div className='photo__left'>
        <img src={item.thumbnailUrl} alt={String(item.id)}/>
      </div>
      <div className='photo__right'>
        <h3>{item.title}</h3>
        <a href={item.url}>{item.url}</a>
      </div>
    </div>
  )
}