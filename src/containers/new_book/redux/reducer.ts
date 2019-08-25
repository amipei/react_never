import {ActionTypes} from "./actionTypes"

export enum Status {
  LOADING,
  SUCCESS,
  FAILURE
}
export default (state = {status: Status.LOADING}, action:any) => {
  switch (action.type) {
    case ActionTypes.CHANGE_NEW_BOOK: {
      return {...state, result: action.nowSearch}
    }
    case ActionTypes.FETCH_STARTED: {
      return {status: Status.LOADING}
    }
    case ActionTypes.FETCH_SUCCESS: {
      return {...state, status: Status.SUCCESS, result: action.result}
    }
    case ActionTypes.FETCH_FAILURE: {
      return {status: Status.FAILURE}
    }
    default: {
      return state
    }
  }
}