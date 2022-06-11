export default function EditTodo({ setEditTodo }) {
  const editTodoHandler = () => setEditTodo(true);

  return (
    <>
      <button
        onClick={editTodoHandler}
        class="flex-no-shrink p-1  border-2 rounded text-teal border-teal hover:text-white text-blue-400 border-blue-400 hover:bg-blue-400"
      >
        edit
      </button>
    </>
  );
}
