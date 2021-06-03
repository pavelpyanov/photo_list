import React, {FC} from "react";

interface IPaginationProps{
  pages: number[]
  changePageHandler: (num: number) => void
  currentPage: number
}

export const Pagination: FC<IPaginationProps> = ({pages, changePageHandler, currentPage}: IPaginationProps) => {
  return(
    <ul className='pages-number'>
      <li className='page_number' onClick={() => changePageHandler(currentPage)}>&larr;</li>
      {pages.map(page => {
        return (
          <li
            key={'number' + page}
            className={(currentPage + 1 === page) ? 'page_number active' : 'page_number'}
            onClick = {() => changePageHandler(page)}
          >
            {page}
          </li>)
      })}
      <li className='page_number' onClick={() => changePageHandler(currentPage + 2)}>&rarr;</li>
    </ul>

  )
}