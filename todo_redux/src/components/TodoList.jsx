import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import TodoItem from "./TodoItem.jsx";
import { addItem } from "../slices/todoSlice.js";

const TodoList = () => {
    const [content, setContent] = useState("");
    const dispatch = useDispatch();

    const todos = useSelector((state) => state.todo.todos);
    const count = useSelector((state) => state.todo.count);

    const handleInput = (e) => {
        setContent(e.target.value);
        console.log([todos]);
    };

    const handleAddition = () => {
        if (content) {
            dispatch(addItem(content));
            setContent("");
            // console.log('test');
        }
    };

    return (
        <div className="todo-input">
            {count}
            <input type="text" value={content} onChange={handleInput} />
            <button onClick={handleAddition}>Add</button>
            {count > 0 && (
                <ul>
                    {todos.map((todo) => (
                        <TodoItem
                            key={todo.id}
                            content={todo.content}
                            id={todo.id}
                        />
                    ))}
                </ul>
            )}
            {count === 0 && <p>No todos</p>}
        </div>
    );
};

export default TodoList;
