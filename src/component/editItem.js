import axios from "axios";
import { editTodo } from "../store/slices/todosSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";

export default function EditItem({ setEditTodo, todo }) {

  const dispatch = useDispatch();
  const [editTodoItem, setEditTodoItem] = useState(todo);

  const handleSubmit = async () => {
    try {
      const res = await axios.put(
        `https://62a1c619efe73bc8bc250c23.endapi.io/Todo%20List/${todo.id}`,
        { ...editTodoItem, text: editTodoItem.text }

      );
      dispatch(
        editTodo(res.data.data)
      );

    } catch (e) {
      console.log(e);
    }
    setEditTodo(false);

  };

  return (
    <>
      <div className="flex mt-4">
        <input
          id="text"
          onChange={(e) => setEditTodoItem({ ...todo, text: e.target.value })}
          value={editTodoItem.text}
          name="text"
          className="shadow appearance-none border rounded w-full py-2 px-3 m-3 text-grey-darker"
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
