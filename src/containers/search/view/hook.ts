import { useDispatch, shallowEqual } from "react-redux";
import { useSelector } from "../../../common/reduxHook"
import {
  addMatchSearch,
  changeHistorySearch,
  clickResultItem,
  delHistorySearch,
  input,
  readFromlocalStorage
} from "../redux/actions"

export const useSearchValue = () => {
  const dispatch = useDispatch()
  const onChange = (value: string) => dispatch(input(value))
  const value = useSelector(state => state.search.value, shallowEqual)

  return {value, onChange}
}
export const useNowSearch = () => {
  const nowSearch = useSelector(state => state.search.nowSearch, shallowEqual)
  return {nowSearch}
}
export const usePagingMatchSearch = () => {
  const dispatch = useDispatch()
  const pagingSearch = (start: string) => dispatch(addMatchSearch(start))
  return [pagingSearch]
}
export const useCLICKResult = () => {
  const dispatch = useDispatch()
  const clickResultAction = (value: string) => dispatch(clickResultItem(value))
  return {clickResultAction}
}
export const useHistorySearch = () => {
  const dispatch = useDispatch()
  const loading = () => dispatch(readFromlocalStorage())
  const delHistory = () => dispatch(delHistorySearch())
  const historySearch = useSelector(state => state.search.historySearch)
  return {loading, delHistory, historySearch}
}