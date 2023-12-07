import { useDispatch, useSelector } from "react-redux";
import { toggleDone, deleteItem } from "../slices/todoSlice.js";

const TodoItem = (props) => {
    console.log(props);

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
            <li key={props.id}>
                {props.content}
                <label className="switch">
                    <input
                        type="checkbox"
                        value={false}
                        onClick={() => dispatch(handleDone(props.id))}
                    />
                    <span className="slider"></span>
                    <button onClick={() => dispatch(handleDelete(props.id))}>
                        Delete
                    </button>
                </label>
            </li>
        </div>
    );
};

export default TodoItem;
