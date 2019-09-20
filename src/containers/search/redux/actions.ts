import ActionTypes from "./actionTypes"
import {searchValueFetch} from "../../../api/service"

import {push} from "connected-react-router"
var debounce = require("lodash.debounce")

/**
 * 改变值
 */
export const changeValue = (value: string) => ({
  type: ActionTypes.CHANGE_VALUE,
  value
})
export const changeNowSearch = (nowSearch: any) => ({
  type: ActionTypes.CHANGE_NOW_SEARCH,
  nowSearch
})
export const changeHistorySearch = (historySearch: Set<string>) => ({
  type: ActionTypes.CHANGE_HISTORY_SEARCH,
  historySearch
})

/**
 * @function
 * @desc 输入 函数
 * @param {string} value 搜索值
 */
export const input = (value: string) => {
  return (dispatch: any) => {
    dispatch(changeValue(value))

    if (value.length === 0) {
      dispatch(push('/react_never/search'))
      return
    }
    dispatch(push('/react_never/search/q'))
    debounce(() => {
      dispatch(fetchSearchResult(value))
    }, 300)()
  }
}

export const fetchSearchResult = (value: string) => {
  return (dispatch: any) => {
    dispatch(fetchStarted())
    searchValueFetch(value, {field: 'title'})
      .then(data => {
        dispatch(fetchSuccess())
        dispatch(changeNowSearch(data))
      })
      .catch(err => {
        dispatch(fetchFailure())
      })
  }
}
export const fetchMatchSearchResult = (value: string) => {
  return (dispatch: any) => {
    dispatch(fetchStarted())
    searchValueFetch(value, {field: 'title,subtitle,author,rating,pubdate,images,publisher,isbn13,alt'})
      .then(data => {
        dispatch(fetchSuccess())
        dispatch(changeNowSearch(data))
      })
      .catch(err => {
        dispatch(fetchFailure())
      })
  }
}

export const clickResultItem = (value: string) => {
  return (dispatch:any) => {
    dispatch(changeValue(value))
    dispatch(addSearchLog(value))
    dispatch(fetchMatchSearchResult(value))
    dispatch(push('/react_never/search/match'))
  }
}

export const addMatchSearch = (start:string) => {
  return (dispatch: any, getState: any) => {
    const nowSearch = getState()['search'].nowSearch
    const value = getState()['search'].value
    const newNowSearch = JSON.parse(JSON.stringify(nowSearch));
    searchValueFetch(value, {field: 'title,subtitle,author,rating,pubdate,images,publisher,isbn13,alt', start: start})
      .then(data => {
        newNowSearch.count = data.count
        newNowSearch.start = data.start
        newNowSearch.total = data.total
        const temp = newNowSearch.books.concat(data.books)
        newNowSearch.books = temp
        dispatch(changeNowSearch(newNowSearch))
      })
  }
}
//搜索历史操作相关
/**
 * @function
 * @desc 添加历史
 * @param value
 */
export const addSearchLog = (value: string) => {
  return (dispatch: any, getState: any) => {
    const historySearch = getState().search.historySearch
    let newHistorySearch: Set<string> = copySet(historySearch)
    dispatch(changeHistorySearch(newHistorySearch.add(value)))
    dispatch(writeTolocalStorage(newHistorySearch))
  }
}
export const writeTolocalStorage = (historySearch: any) => {
  return (dispatch: any) => {
    const value = JSON.stringify([...historySearch])
    localStorage.setItem('react-book', value);
  }
}
export const readFromlocalStorage = () => {
  return (dispatch: any) => {
    let value = localStorage.getItem('react-book');
    let historySearch
    if (value) {
      historySearch = JSON.parse(value)
    }
    dispatch(changeHistorySearch(new Set(historySearch)))
  }
}

export const delHistorySearch = () => {
  return (dispatch: any) => {
    dispatch(changeHistorySearch(new Set()))
    localStorage.setItem('react-book', '');
  }
}

/*
* 网络请求相关
* */
const fetchStarted = () => ({
  type: ActionTypes.FETCH_STARTED
})

const fetchSuccess = () => ({
  type: ActionTypes.FETCH_SUCCESS
})
///TODO暂不做处理
const fetchFailure = () => ({
  type: ActionTypes.FETCH_FAILURE
})

const copySet = (set: Set<string>) => {
  let newSet = new Set<string>()
  set.forEach(item => newSet.add(item))
  return newSet
}