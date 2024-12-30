import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/Todoitem1";
import "./App.css";

function App() {
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <div className="items-container">
        <TodoItem todoName={"Buy Milk"} todoDate={"4/10/2024"}></TodoItem>
        <TodoItem todoName={"Go to College"} todoDate={"15/10/2024"}></TodoItem>
        <TodoItem todoName={"Trip Plan"} todoDate={"20/10/2024"}></TodoItem>
        </div>
    </center>
  );
}

export default App;
