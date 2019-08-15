import { combineReducers } from "redux";
import { default as newBookReducer } from "../components/new_book/redux/reducer"
import { default as detailsReducer } from "../components/details/redux/reducer"


export default combineReducers({
  newBook: newBookReducer,
  details: detailsReducer
})