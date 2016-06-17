import {combineReducers} from 'redux'
import todoReducer from './todoReducer'
import userReducer from './userReducer'

// combine reducers with partial of state
const rootReducer = combineReducers({
  todos: todoReducer,
  user: userReducer
})

export default rootReducer