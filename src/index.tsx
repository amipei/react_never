import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from "react-router-dom"
import {Provider} from "react-redux"
import configureStore from "./redux/configureStore"
import App from './App'

const store = configureStore(undefined)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename="/">
      <App/>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'))
