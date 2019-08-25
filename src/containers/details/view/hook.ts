import {useSelector} from "../../../common/reduxHook"
import {shallowEqual, useDispatch} from "react-redux"
import {getBoosInfo} from "../redux/actions"
import {useEffect} from "react"

export const useDetailsState = (isbn: string) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getBoosInfo(isbn))
  }, [])
  const setDetailsState = (isbn: string) => dispatch(getBoosInfo(isbn))
  const state = useSelector(state => state.details, shallowEqual)
  return {state, setDetailsState}
}
