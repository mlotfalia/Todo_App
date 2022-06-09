import { editTodo } from "../store/slices/todosSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";

export default function EditItem({ setEditTodo, todo }) {
  const [editTodoItem, setEditTodoItem] = useState({
    id: todo.id,
    text: todo.text,
    done: todo.done,
  });
  let todoText;
  const dispatch = useDispatch();
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    console.log(value);

    todoText = value;
    console.log(todoText);
    setEditTodoItem({ ...todo, [name]: value });
  };

  const handleSubmit = () => {
    setEditTodoItem((prevState) => {
      let todos = prevState.map((todoItem) =>
        todoItem.id === todo.id ? todo : todoItem
      );
      return todos;
    });

    dispatch(
      editTodo({
        id: editTodoItem.id,
        text: editTodoItem.text,
        done: editTodo.done,
      })
    );
    setEditTodo(false);
  };

  return (
    <>
      <input
        id="text"
        onChange={handleInput}
        value={editTodoItem.text}
        name="text"
        class="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
        placeholder="Add Todo"
      />
      <button className="btn-success btn-sm" onClick={handleSubmit}>
        بروزرسانی
      </button>
      <button className="btn-cancel btn-sm" onClick={() => setEditTodo(false)}>
        انصراف
      </button>
    </>
  );
}