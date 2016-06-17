import React, {Component} from 'react';

class UserInfo extends Component {

    handleNewId() {
        this.props.actions.createNewUserId()
    }

    handleNewIdIfOdd() {
        this.props.actions.createNewUserIdIfOdd()
    }

    handleNewIdAsync() {
        this.props.actions.createNewUserIdAsync()
    }

    render() {
        return (
            <div>
                <p> Hello {this.props.user.id}: {this.props.user.username} </p>
                <button onClick={this.handleNewId.bind(this) }>Generate New ID</button>
                <button onClick={this.handleNewIdIfOdd.bind(this) }> Generate New ID If Odd</button>
                <button onClick={this.handleNewIdAsync.bind(this) }> Generate New ID Async</button>
            </div>
        );
    }
}

export default UserInfo;