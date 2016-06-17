import {applyMiddleware, compose, createStore} from 'redux'
import rootReducer from './reducers/index'
import logger from 'redux-logger'
import thunk from 'redux-thunk'


// add middleware
let finalCreateStore = compose (
    applyMiddleware(thunk,logger())
)(createStore)

//create store with reducer 
export default function configureStore(initialState= {todos: [], user: {}}) {
   return finalCreateStore(rootReducer, initialState);
}