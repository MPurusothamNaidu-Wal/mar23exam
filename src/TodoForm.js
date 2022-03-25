import { useContext, useReducer, useState } from "react";
import TodoContext from "./TodoContext";
const TodoForm = () => {
    let [todo, setTodos] = useState("")
    let [status, setStatus] = useState("done")
    let { dispatch } = useContext(TodoContext)
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const addTodo = () => {
        document.getElementById("inputID").value.length > 0 ? dispatch({ type: 'add', todo: todo, status: status }) : alert("Give Todo")
    }
    const clearAllTodos = () => {
        dispatch({ type: 'delAll' })
    }
    return (
        <div>
            <form onSubmit={handleSubmit} >
                <input
                    type="text"
                    name="todoinput"
                    id="inputID"
                    placeholder="Enter Todo"
                    onInput={(e) => {
                        setTodos(e.target.value)
                    }}
                />
                <select onChange={(e) => {
                    setStatus(e.target.value)
                }} >
                    <option value='done' >Complete</option>
                    <option value='notdone' >Not Complete</option>
                </select>
                <br />
                <button onClick={addTodo} >Add Todo</button>
                <button onClick={clearAllTodos}  >Clear All Todos</button>
            </form>
        </div>
    )
}
export default TodoForm;