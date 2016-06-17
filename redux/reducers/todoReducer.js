//todos reducer

function getID(todos) {
    return todos.reduce((maxId, todo) => {
        return Math.max(todo.id, maxId)
    }, -100) + 1
}

export default function todoReducer(todos=[], action) {
    switch (action.type) {
        case 'ADD_TODO':
            console.log('store: got to ADD_TODO case');
            return [{
                    text: action.text,
                    completed: false,
                    id: getID(todos)
                }, ...todos];

        case 'COMPLETE_TODO':
            return todos.map((todo) => {
                    return todo.id === action.id ?
                        Object.assign({}, todo, { completed: !todo.completed }) : todo
                });

        case 'DELETE_TODO':
            return todos.filter((todo) => {
                    return todo.id !== action.id
                })

        default:
            return todos;
    }
}

