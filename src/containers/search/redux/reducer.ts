import ActionTypes from "./actionTypes"

const initialState = {
  value: '',
  historySearch: new Set<string>(),
  nowSearch: null
}
export enum Status {
  LOADING,
  SUCCESS,
  FAILURE
}
const searchReducer = (state = initialState, action: any) => {
  switch (action.type) {
    /*更改*/
    case ActionTypes.CHANGE_VALUE: {
      return {...state, value: action.value}
    }
    case ActionTypes.CHANGE_HISTORY_SEARCH: {
      console.log(action.historySearch)
      return {...state, historySearch: action.historySearch}
    }
    case ActionTypes.CHANGE_NOW_SEARCH: {
      return {...state, nowSearch: action.nowSearch}
    }
    /*搜索页面请求状态*/
    case ActionTypes.FETCH_STARTED: {
      return {...state, status: Status.LOADING}
    }
    case ActionTypes.FETCH_SUCCESS: {
      return {...state, status: Status.SUCCESS}
    }
    case ActionTypes.FETCH_FAILURE: {
      return {...state, status: Status.FAILURE}
    }
    default:
      return state
  }
}

export default searchReducer
