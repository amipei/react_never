import {useEffect} from "react"
import {shallowEqual, useDispatch} from "react-redux"
import {useSelector} from "../../../common/reduxHook"
import {fetchNewBookData, fetchPagingNewBookData} from "../redux/actions"

export const useNewBook = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    console.log(2333)
    dispatch(fetchNewBookData())
  }, [dispatch])
  const loadNewBookData = (start: string) => dispatch(fetchNewBookData())
  const newBook: any = useSelector(state => state.newBook, shallowEqual)

  return [newBook, loadNewBookData]
}
export const usePagingNewBook = () => {
  const dispatch = useDispatch()
  const loadNewBookData = (start: string) => dispatch(fetchPagingNewBookData(start))
  const newBook: any = useSelector(state => state.newBook, shallowEqual)
  return [newBook, loadNewBookData]
}