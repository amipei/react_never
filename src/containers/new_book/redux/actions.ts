import {searchTagFetch} from "../../../api/service"
import {ActionTypes} from "./actionTypes"


export const fetchNewBookData = () => {
  return (dispatch: any) => {
    dispatch(fetchStarted())
    searchTagFetch('2019', {field: 'title,subtitle,author,rating,pubdate,images,publisher,isbn13,alt'})
      .then(data => {
        dispatch(fetchSuccess(data))
      })
      .catch(err => {
        dispatch(fetchFailure(err))
      })
  }
}
export const fetchPagingNewBookData = (start: string) => {
  console.log(start)
  return (dispatch: any, getState: any) => {
    const newBook = getState()['newBook'].result
    const newNewBook = JSON.parse(JSON.stringify(newBook));
    searchTagFetch('2019', {field: 'title,subtitle,author,rating,pubdate,images,publisher,isbn13,alt', start: start})
      .then(data => {
        newNewBook.count = data.count
        newNewBook.start = data.start
        newNewBook.total = data.total
        const temp = newNewBook.books.concat(data.books)
        newNewBook.books = temp
        dispatch(changeNewBook(newNewBook))
      })
  }
}
const changeNewBook = (nowSearch: any) => ({
  type: ActionTypes.CHANGE_NEW_BOOK,
  nowSearch
})
const fetchStarted = () => ({
  type: ActionTypes.FETCH_STARTED
})

const fetchSuccess = (result: any) => ({
  type: ActionTypes.FETCH_SUCCESS,
  result
})
///TODO暂不做处理
const fetchFailure = (error: any) => ({
  type: ActionTypes.FETCH_FAILURE,
  error
})
