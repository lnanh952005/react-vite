//component = html + css + js
import "./components/todo-list/todo.css";
import TodoData from "./components/todo-list/TodoData";
import TodoNew from "./components/todo-list/TodoNew";
import logo from "./assets/react.svg";

const hoidanit = "hellllo";
const age = 222;
const data = {
  address: "hanoi",
  country: "vietnam",
};
const addNewTodo = (name) => {
  alert(`my name is: ${name}`);
};

const App = () => {
  return (
    <div className="todo-container">
      <div className="todo-title">ToDo List</div>
      <TodoNew addNewTodo={addNewTodo} />
      <TodoData hoidanit={hoidanit} age={age} data={data} />
      <img src={logo} />
    </div>
  );
};

export default App;
