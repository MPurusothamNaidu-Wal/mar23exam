const ReducerTodo = (state, action) => {
    if (action.type == "add") {
        let todoObject = {
            todo: action.todo,
            status: action.status,
        }
        let newTodos = [...state, todoObject];
        return newTodos
    }
    if (action.type == "deleteThisTodo") {
        let newTodos = state.filter(function (val, index) {
            if (action.indexToDel == index) {
                return false
            }
            return true
        })
        return newTodos
    }
    if (action.type == "delAll") {
        return []
    }
}
export default ReducerTodo;