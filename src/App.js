import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import profile from "./assets/profile.jpg"

function App() {
  return (
    <div className="app dark">
      <div className="dev-container row">
        <div className="col-2">
          <a href="https://uxairishere.github.io/profile" target="_blank"><img className="dev-img" src={profile} href="loading profile" /></a>
        </div>
        <div className="col-10 dev-desc">
          <p>Hi! I'm Uzair, author of this project. In my free time, I like to build amazing projects using React and Node.</p>
        </div>
      </div>

      <h1 className="app-title">Daily Tasks <i class="bi bi-list-task"></i></h1>
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
