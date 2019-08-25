import { applyMiddleware, compose, createStore } from 'redux'

import ReduxThunk from 'redux-thunk'
import createRootReducer from './reducers'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'

export const history = createBrowserHistory()

const rootReducer = createRootReducer(history)

export type RootState = ReturnType<typeof rootReducer>

export default function configureStore(preloadedState: any) {
  const store = createStore(
    rootReducer,
    preloadedState,
    compose(
      applyMiddleware(
        routerMiddleware(history),
        ReduxThunk
      ),
    ),
  )
  return store
}