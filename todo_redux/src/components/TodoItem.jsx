import { useDispatch, useSelector } from "react-redux";
import { toggleDone, deleteItem } from "../slices/todoSlice.js";

const TodoItem = () => {
    const todos = useSelector((state) => state.todos || []);
        const dispatch = useDispatch();

    const handleDone = (id) => {
        toggleDone(id);
    };

    const handleDelete = (id) => {
        deleteItem(id);
    };

    return (
        <div className="todo-list">
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        {todo.content}
                        <label className="switch">
                            <input
                                type="checkbox"
                                value={false}
                                onClick={() => dispatch(handleDone(todo.id))}
                            />
                            <span className="slider"></span>
                            <button
                                onClick={() => dispatch(handleDelete(todo.id))}>
                                Delete
                            </button>
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoItem;