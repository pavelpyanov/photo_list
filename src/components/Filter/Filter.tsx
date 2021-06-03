import React, {FC} from "react";
import './Filter.scss';
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {changeFilter, fetchList, filterList} from "../../redux/actions-ceratot";

export const Filter: FC = () => {
  const dispatch = useAppDispatch()
  const {filter} = useAppSelector(state => state.listPhotos)

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeFilter(event.target.value))
  }

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(filterList(filter))
  }

  const onResetHandler = () => {
    dispatch(fetchList())
  }

  return(
    <div className='filter'>
      <h3 className='filter__title'>Фильтровать</h3>
      <form onSubmit={onSubmitHandler}>
        <div className="form-line">
          <h4 className='form-line__title'>Выбери альбом</h4>
          <label htmlFor="alb-1">Альбом 1</label>
          <input id='alb-1' type='radio' value='1' name='filter' onChange={onChangeHandler} />
          <label htmlFor="alb-2">Альбом 2</label>
          <input id='alb-2' type='radio' value='2' name='filter' onChange={onChangeHandler} />
          <label htmlFor="alb-3">Альбом 3</label>
          <input id='alb-3' type='radio' value='3' name='filter' onChange={onChangeHandler} />
          <label htmlFor="alb-4">Альбом 4</label>
          <input id='alb-4' type='radio' value='4' name='filter' onChange={onChangeHandler} />
          <label htmlFor="alb-5">Альбом 5</label>
          <input id='alb-5' type='radio' value='5' name='filter' onChange={onChangeHandler} />
        </div>
        <div className="form-line">
          <input type='submit' value='Фильтровать'/>
          <input type='reset' value='Убрать фильтрацию' onClick={onResetHandler}/>
        </div>
      </form>
    </div>
  )
}