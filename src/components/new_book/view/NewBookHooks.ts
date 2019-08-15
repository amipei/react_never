import {useDispatch, useSelector} from "react-redux"
import {useCallback, useEffect } from "react"
import {fetchNewBook} from "../redux/actions"

const getNewBook = (state: any) => state.newBook

const useNewBook = () => {
  const dispatch = useDispatch()
  console.log(233)
  useEffect(() => {
    dispatch(fetchNewBook())
  }, [dispatch])

  const fetchData = useCallback(
    () => {
      dispatch(fetchNewBook())
    },
    [dispatch]
  )

  const data = useSelector(getNewBook)
  return {
    data,fetchData
  }
}

export default useNewBook