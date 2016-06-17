import React from 'react'
import { render } from 'react-dom'
import App from '../components/App'
import configureStore from '../redux/store.js'
import {Provider} from 'react-redux'

// configure and initial your store tree
let initialState = {
  todos: [{
    id: 0,
    completed: false,
    text: 'initail todo for demo'
  }],
  user: {
    username: 'Jerry',
    id: 13
  }
}

let store = configureStore(initialState)

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app')
)
