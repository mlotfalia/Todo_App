import { useDispatch, useSelector } from "react-redux";

import AddTodo from "./addTodo";
import ShowTodoItem from "./showTodoItem";
import axios from "axios";
import { setTodo } from "../store/slices/todosSlice";
import { useEffect } from "react";

export default function ShowTodoList() {
  const dispatch = useDispatch();

  const getTodo = async () => {
    let res = await axios.get("/Todo%20List");
    dispatch(setTodo(res.data.data));
  };
  useEffect(() => {
    getTodo();
    // eslint-disable-next-line
  }, []);

  const todos = useSelector((state) => state.todos.list);
  return (
    <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
      <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-3xl border">
        <div className="mb-4">
          <h1 className="text-gray-700 text-3xl font-bold">Todo List</h1>
          <AddTodo />
        </div>
        <div>
          {todos.map((todo, index) => (
            <ShowTodoItem key={index} todo={todo} />
          ))}
        </div>
      </div>
    </div>
  );
}
