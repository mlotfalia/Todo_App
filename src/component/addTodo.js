import { addTodo } from "../store/slices/todosSlice";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useState } from "react";

export default function AddTodo() {
  const dispatch = useDispatch();
  const [inputTodo, setInputTodo] = useState("");
  const inputTodoHandler = (e) => setInputTodo(e.target.value);
  const addTodoHandler = async () => {
    if (inputTodo.length > 0) {
      try {
        let res = await axios.post(
          "https://62a1c619efe73bc8bc250c23.endapi.io/Todo%20List",
          {
            text: inputTodo,
            done: false,
          }
        );
        dispatch(addTodo(res.data));
        setInputTodo("");
      } catch (e) {
        console.log(e);
      }
    }
  };
  return (
    <>
      <div class="flex mt-4">
        <input
          onChange={inputTodoHandler}
          value={inputTodo}
          class="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
          placeholder="Add Todo"
        />
        <button
          onClick={addTodoHandler}
          class="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-gray hover:bg-teal"
        >
          Add
        </button>
      </div>
    </>
  );
}
