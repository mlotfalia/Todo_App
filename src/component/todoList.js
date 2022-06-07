import AddTodo from "./addTodo";
import ShowTodoItem from "./showTodoItem";
import { useSelector } from "react-redux";

export default function ShowTodoList() {
  const todos = useSelector((state) => state.todos.list);
  console.log(todos);
  return (
    <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
      <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-3xl border">
        <div className="mb-4">
          <h1 className="text-gray-700 text-3xl font-bold">Todo List</h1>
          <AddTodo />
        </div>
        <div>
          {todos.map((todo) => (
            <ShowTodoItem todo={todo} />
          ))}
        </div>
      </div>
    </div>
  );
}
