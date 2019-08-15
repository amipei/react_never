import React from 'react'

import Express from "../../../baseUI/express/Express"
import NewBookItem from "./NewBookItem"
import useNewBook from "./NewBookHooks"
import {Status} from "../../status"

import './new_book.scss'
import {Link} from "react-router-dom"

const NewBook: React.FC = () => {
  const { data } = useNewBook()
  const { books, status } = data
  console.log(books)
  const classPrefix = 'new-book'
  return (
    <div className={classPrefix}>
      {status === Status.SUCCESS ? (
        <Express title='新书速递' to='/tos' data={books}
                 renderItem={(item:any, i:any) => (
                   <NewBookItem classPrefix={classPrefix} key={'newbook' + i} index={i} item={item}/>
                 )}
        />
      ) : null}
    </div>
  )
}

export default NewBook