import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router'
import {detailsReducer} from "../containers/details"
import searchReducer from "../containers/search/redux/reducer"
import newBookReducer from "../containers/new_book/redux/reducer"

// @ts-ignore
// @ts-ignore
export default (history:any) => combineReducers({
  router: connectRouter(history),
  search: searchReducer,
  newBook: newBookReducer,
  details: detailsReducer
})
