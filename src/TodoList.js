import { useContext } from "react";
import TodoContext from "./TodoContext";
const TodoList = () => {
    let valuesAll = useContext(TodoContext)
    return (
        <div>
            {
                valuesAll.state.map((val, index) => {
                    return (
                        <div className="m-3">
                            <h3  >{val.todo}</h3>
                            <h4 className={val.status}>{val.status}</h4>
                            <button onClick={() => {
                                valuesAll.dispatch({type:'deleteThisTodo', indexToDel:index})
                            }}>Delete</button>
                        </div>
                        
                    )

                })
            }
        </div>

    )
}
export default TodoList