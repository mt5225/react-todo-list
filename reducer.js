function getID(state) {
    return state.todos.reduce((maxId, todo) => {
        return Math.max(todo.id, maxId)
    }, -100) + 1
}

export default function reducer(state, action) {
    switch (action.type) {
        case 'ADD_TODO':
            console.log('store: got to ADD_TODO case');
            return Object.assign({}, state, { //make a new object instead of modify the old one
                todos: [{
                    text: action.text,
                    completed: false,
                    id: getID(state)
                }, ...state.todos]
            });
        case 'COMPLETE_TODO':
            return Object.assign({}, state, { //make a new object instead of modify the old one
                todos: state.todos.map((todo) => {
                    return todo.id === action.id ?
                        Object.assign({}, todo, { completed: !todo.completed }) : todo
                })
            });
        case 'DELETE_TODO':
            return Object.assign({}, state, { //make a new object instead of modify the old one
                todos: state.todos.filter((todo) => {
                    return todo.id !== action.id
                })
            });
        case 'CREATE_USER_ID':
            return Object.assign({}, state, {
                user: {
                    username: state.user.username,
                    id: action.id
                }
            })
        default:
            return state;
    }
}

