import { deleteTodo, toggleDoneTodo } from "../store/slices/todosSlice";

import EditItem from "./editItem";
import EditTodo from "./editTodo";
import { useDispatch } from "react-redux";
import { useState } from "react";

export default function ShowTodoItem({ todo }) {
  const dispatch = useDispatch();
  const todoDeleteHandler = () => dispatch(deleteTodo(todo.id));
  const toggleDoneTodoHandler = () => dispatch(toggleDoneTodo({ id: todo.id }));
  const [editTodo, setEditTodo] = useState(false);
  return !editTodo ? (
    <div className="flex mb-4 items-center">
      <p
        className={`mr-auto ${
          todo.done ? "line-trought text-green-600" : "text-gray-700"
        } `}
      >
        {todo.text}
      </p>
      {todo.done ? (
        <button
          onClick={toggleDoneTodoHandler}
          className="p-1 px-2 ml-4 mr-2 border-2 rounded hover:text-white text-gray-400 border-gray-400 hover:bg-gray-400"
        >
          Not Done
        </button>
      ) : (
        <button
          onClick={toggleDoneTodoHandler}
          className="p-1 px-2 ml-4 mr-2 border-2 rounded hover:text-white text-green-600 border-green-600 hover:bg-green-600"
        >
          Done
        </button>
      )}
      <EditTodo setEditTodo={setEditTodo} />
      <button
        onClick={todoDeleteHandler}
        className="p-1 px-2 ml-2 border-2 rounded text-red-600 border-red-600 hover:text-white hover:bg-red-600"
      >
        Remove
      </button>
    </div>
  ) : (
    <EditItem setEditTodo={setEditTodo} />
  );
}
