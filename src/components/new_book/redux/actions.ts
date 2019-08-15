import {ActionTypes} from "./actionTypes"
import {apikey} from "../../../token"
import fetchJsonp from "fetch-jsonp";

export const fetchNewBookStarted = () => ({
  type: ActionTypes.FETCH_STARTED
})

export const fetchNewBookSuccess = (result: any) => ({
  type: ActionTypes.FETCH_SUCCESS,
  result
})

export const fetchNewBookFailure = (error: any) => ({
  type: ActionTypes.FETCH_FAILURE,
  error
})

export const fetchNewBook = () => {
  return (dispatch: any, getState: any) => {
    const apiUrl = `https://api.douban.com/v2/book/search?apikey=${apikey}&tag=2019`
    dispatch(fetchNewBookStarted)
    fetchJsonp(apiUrl)
      .then((response) => {
        return response.json()
      }).then((json) => {
        dispatch(fetchNewBookSuccess(json))
      }).catch((error) => {
        dispatch(fetchNewBookFailure(error))
      })
  }
}