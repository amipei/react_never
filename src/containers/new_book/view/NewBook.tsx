import React from 'react'
import {Link} from "react-router-dom"
import {Express} from "../../../baseUI"

import {apikey} from "../../../api/service"
import {useNewBook} from "./hook"
import './new_book.scss'
import {Status} from "../redux/reducer"

const NewBook: React.FC = () => {
  const [newBook] = useNewBook()
  const {status, result} = newBook
  const classPrefix = 'new-book'
  console.log(newBook)
  if (status === Status.LOADING ) return null
  return (
    <div className={classPrefix}>
      {status === Status.SUCCESS ? (
        <Express to='/all/newBook'
                 data={result.books}
                 title='新书速递'
                 renderItem={(item:any, i:any) => (
									 <Link className={`${classPrefix}__item`}
                         to={`/details/${item.isbn13}`}
                         key={item.isbn13 + i + 'nb'}>
										 <div className={`${classPrefix}__img-wrap`}>
											 <img className={`${classPrefix}__img`} src={`${item.image}?apikey=${apikey}`}/>
										 </div>
										 <h3 className={`${classPrefix}__title`}>{item.title}</h3>
										 <span className={`${classPrefix}__author`}>{item.author}</span>
									 </Link>
                 )}
        />
      ) : <div>网络错误</div>}
    </div>
  )
}

export default NewBook