import { applyMiddleware, compose, createStore } from 'redux'

import ReduxThunk from 'redux-thunk'
import createRootReducer from './reducers'

export default function configureStore(preloadedState: any) {
  const store = createStore(
    createRootReducer,
    preloadedState,
    compose(
      applyMiddleware(
        ReduxThunk
      ),
    ),
  )

  return store
}