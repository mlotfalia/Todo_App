export default function EditTodo({ setEditTodo }) {
  const editTodoHandler = () => setEditTodo(true);

  return (
    <>
      <button
        onClick={editTodoHandler}
        className="flex-no-shrink p-1  border-2 rounded text-teal border-teal hover:text-white text-yellow-400 border-yellow-400 hover:bg-yellow-400"
      >
        edit
      </button>
    </>
  );
}
