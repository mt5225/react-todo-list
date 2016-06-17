import React, { Component } from 'react'

class TodoInput extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      inputText: ''
    }
  }


  handleChange(event) {
    this.setState({
      inputText: event.target.value
    })
  }

  handleSubmit(event) {
    console.log("submit button clicked")
    event.preventDefault()
    //dispatch the action to store
    //this.props.dispatch(actions.addTodo(this.state.inputText))
    this.props.addTodo(this.state.inputText)
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Typing your todo"
          value={this.state.inputText}
          onChange={this.handleChange.bind(this)}
        />
        <button onClick={this.handleSubmit.bind(this)}>Submit</button>
      </div>
    )
  }

}

export default TodoInput
