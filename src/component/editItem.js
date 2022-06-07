import { editTodo } from "../store/slices/todosSlice";
import { useDispatch } from "react-redux";

export default function EditItem({ setEditTodo }) {
  const handleSubmit = () => {};
  return (
    <>
      <input
        onChange={inputTodoHandler}
        value={inputTodo}
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
