import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="app dark">
      <h1 className="app-title">Daily Tasks <i class="bi bi-list-task"></i></h1>
      <AddTodo/>
      <TodoList/>
    </div>
  );
}

export default App;
