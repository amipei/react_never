import {ActionTypes} from "./actionTypes"
import {apikey} from "../../../token"
import fetchJsonp from "fetch-jsonp";

export const fetchDefailsStarted = () => ({
  type: ActionTypes.FETCH_STARTED
})

export const fetchDefailsSuccess = (result: any) => ({
  type: ActionTypes.FETCH_SUCCESS,
  result
})

export const fetchDefailsFailure = (error: any) => ({
  type: ActionTypes.FETCH_FAILURE,
  error
})

export const fetchDetails = (isbn: string) => {
  return (dispatch: any, getState: any) => {
    const apiUrl = `https://api.douban.com/v2/book/isbn/${isbn}?apikey=${apikey}`
    dispatch(fetchDefailsStarted)
    fetchJsonp(apiUrl)
      .then((response) => {
        return response.json()
      }).then((json) => {
        dispatch(fetchDefailsSuccess(json))
      }).catch((error) => {
        dispatch(fetchDefailsFailure(error))
      })
  }
}