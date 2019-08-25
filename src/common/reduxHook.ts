import {TypedUseSelectorHook, useSelector as useReduxSelector} from "react-redux"
import {RootState} from "../redux/configureStore"

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector