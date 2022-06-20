import Header from "./layouts/header";
import ScrollTopLayout from "./layouts/scrollTopLayouts";
import TodoList from "./todoList";

export default function TodoPage() {
  return (
    <>
      <Header />
      <TodoList />
      <ScrollTopLayout />
    </>
  );
}
