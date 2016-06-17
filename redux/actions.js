let actions = {
    addTodo(text) {  //action generator: a function returns a POJO with 'type' property
        return {
            type: 'ADD_TODO',
            text: text
        }
    },

    completeTodo(id) {
        return {
            type: 'COMPLETE_TODO',
            id: id
        }
    },

    deleteTodo(id) {
        return {
            type: 'DELETE_TODO',
            id: id
        }
    },

    createNewUserId() {
        return {
            type: 'CREATE_USER_ID',
            id: Math.floor(Math.random() * 100)
        }
    },

    //using thunx, return a function instead of object
    createNewUserIdIfOdd() {
        return (dispatch, getState) => {
            const { user } = getState()
            if (user.id % 2 === 0) {
                return
            }
            dispatch(actions.createNewUserId())
        }
    },

    createNewUserIdAsync() {
        return (dispatch, getState) => {
            setTimeout(() => {
                dispatch(actions.createNewUserId())
            }, 2500)
        }
    }
}

export default actions