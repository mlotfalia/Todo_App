import { editTodo } from "../store/slices/todosSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";

export default function EditItem({ setEditTodo, todo }) {
  const [editTodoItem, setEditTodoItem] = useState({
    id: todo.id,
    text: todo.text,
    done: todo.done,
  });

  const dispatch = useDispatch();
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

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
      <div class="flex mt-4">
        <input
          id="text"
          onChange={handleInput}
          value={editTodoItem.text}
          name="text"
          class="shadow appearance-none border rounded w-full py-2 px-3 m-3 text-grey-darker"
        />

        <button
          className="lex-no-shrink p-2 m-2 border-1 rounded text-teal border-teal  hover:text-white text-green-400 border-green-400 hover:bg-green-400"
          onClick={handleSubmit}
        >
          update
        </button>
        <button
          className="lex-no-shrink p-2 m-2 border-1 rounded text-teal border-teal  hover:text-white text-red-400 border-red-400 hover:bg-red-400"
          onClick={() => setEditTodo(false)}
        >
          cancel
        </button>
      </div>
    </>
  );
}
