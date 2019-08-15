import {ActionTypes} from "./actionTypes"
import {Status} from "../../status"

export default (state = {status: Status.LOADING}, action:any) => {
  switch (action.type) {
    case ActionTypes.FETCH_STARTED: {
      return {status: Status.LOADING}
    }
    case ActionTypes.FETCH_SUCCESS: {
      return {...state, status: Status.SUCCESS, ...action.result}
    }
    case ActionTypes.FETCH_FAILURE: {
      return {status: Status.FAILURE}
    }
    default: {
      return state
    }
  }
}