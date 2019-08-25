import {ActionTypes} from "./actionTypes"
import {queryisbnFetch} from "../../../api/service"

export const getBoosInfo = (isbn: string) => {
  return (dispatch: any) => {
    dispatch(fetchStarted())
    queryisbnFetch(isbn)
      .then(data => {
        dispatch(fetchSuccess(data))
      })
      .catch(err => {
        dispatch(fetchFailure(err))
      })
  }
}

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
