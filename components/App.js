import React, { Component } from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import UserInfo from './UserInfo'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../redux/actions'

class App extends Component {

  render() {
    return (
      <div>
        <h1> ToDo List</h1>
        <UserInfo user={this.props.user} actions={this.props.actions}/>
        <TodoInput addTodo={this.props.actions.addTodo}/>
        <TodoList todos={this.props.todos} actions={this.props.actions}/>
      </div>
    )
  }

}

// acting like a state filter
// can specify only a part of state is passing to props
function mapStateToProps(state) {
  return state
}

//wrapping the dispatch with action method
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
