export default function EditTodo({ setEditTodo }) {
  const editTodoHandler = () => setEditTodo(true);

  return (
    <>
      <button
        onClick={editTodoHandler}
        class="flex-no-shrink p-1 border-2 rounded text-teal border-teal  hover:bg-teal"
      >
        edit
      </button>
    </>
  );
}
