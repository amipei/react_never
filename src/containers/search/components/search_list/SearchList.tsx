import React from 'react'
import {List,ListItem} from "../../../../baseUI"
import {useCLICKResult, useNowSearch} from "../../view/hook"

import './search_list.scss'

const SearchList = (props: any) => {
  const { nowSearch } = useNowSearch()
  const {clickResultAction} = useCLICKResult()
  
  if (nowSearch === null) return null
  const classPrefix = 'search-list'
  return (
    <div>
      <List dataSource={nowSearch.books} renderItem={((item) => (
        <ListItem onClick={clickResultAction} metaData={item.title} key={item.isbn13}>
          <div className={`${classPrefix}__item`}>{item.title}</div>
        </ListItem>
      ))}/>
    </div>
  )
}

export default SearchList