import React, {FC} from 'react';
import './App.scss';
import {PhotoList} from "./components/PhotoList/PhotoList";

export const App: FC = () => {
  return (
    <div className='container pt-3'>
      <h1 className='title'>Список фотографий</h1>
      <PhotoList/>
    </div>
  );
}
