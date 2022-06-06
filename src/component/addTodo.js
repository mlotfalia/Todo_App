import { useState } from "react";

export default function AddTodo() {
  const [inputTodo, setInputTodo] = useState("");
  const inputTodoHandler = (e) => setInputTodo(e.target.value);
    const addTodoHnadler = () => {
        if (inputTodo.length > 0) {
          
      }
  }
  return (
    <>
      <div class="flex mt-4">
        <input
          onChange={inputTodoHandler}
          class="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
          placeholder="Add Todo"
        />
        <button  onClick={ addTodoHandler} class="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal">
          Add
        </button>
      </div>
    </>
  );
}
