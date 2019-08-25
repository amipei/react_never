import React, {useEffect} from 'react'
import {FiTrash2} from "react-icons/fi"

import {Header,IconWrap,Tag} from "../../../../baseUI"

import {useCLICKResult, useHistorySearch} from "../../view/hook"
import './search_history.scss'

const SearchHistory: React.FC = () => {
  const {loading, delHistory,historySearch} = useHistorySearch()
  const {clickResultAction} = useCLICKResult()
  useEffect(() => {
    loading()
  },[])
  const classPrefix = 'search-history'
  const getTags = () => {
    let arr: Array<JSX.Element> = []
    historySearch.forEach((item:any) => {
      arr.push(<Tag key={'tag' + item}
                    metaData={item} onClick={clickResultAction}>{ item }</Tag>)
    })
    return arr
  }
  const getReturn = () => (
    <div className={classPrefix}>
      <Header title='历史搜索'
              extra={<IconWrap icon={<FiTrash2/>} />} onClick={delHistory}
      />
      <div>
        {getTags()}
      </div>
    </div>
  )
  return historySearch.size === 0
    ? null
    : getReturn()
}

SearchHistory.propTypes = {

}

export default SearchHistory