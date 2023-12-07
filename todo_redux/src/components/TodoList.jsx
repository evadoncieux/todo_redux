import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import TodoItem from "./TodoItem.jsx";
import { addItem } from "../slices/todoSlice.js";

const TodoList = () => {
    const [content, setContent] = useState("");
    const dispatch = useDispatch();

    const todos = useSelector((state) => state.todos || []);
    const count = useSelector((state) => state.count);

    const handleInput = (e) => {
        setContent(e.target.value);
        // console.log(content);
        // console.log(e.target.value);
    };

    const handleAddition = () => {
        if (content) {
            dispatch(addItem(content));
            setContent("");
            console.log("added" + ' '+ content);
            console.log([todos]);
        }
    };

    return (
        <div className="todo-input">
            <input type="text" value={content} onChange={handleInput} />
            <button onClick={handleAddition}>Add</button>
            {count > 0 &&
                todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        text={todo.content}
                        id={todo.id}
                    />
                ))}
            {count === 0 && <p>No todos</p>}
        </div>
    );
};

export default TodoList;
