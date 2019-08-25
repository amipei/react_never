import React, {useEffect} from 'react'

import {DetailsList} from "../../../../baseUI"
import {useNowSearch, usePagingMatchSearch} from "../../view/hook"

const SearchMatch = () => {
  const {nowSearch} = useNowSearch()
  const [pagingSearch] = usePagingMatchSearch()
  console.log(nowSearch)
  if (nowSearch === null) return null
  const load = (start: string) => {
    pagingSearch(start)
  }
  return (
    <div>
      <DetailsList dataSource={nowSearch} loadCallBack={load}/>
    </div>
  )
}

export default SearchMatch