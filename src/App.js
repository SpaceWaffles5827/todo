import { useState } from "react";
import "./app.css"
import Form from "./Form";
import TodoList from "./TodoList";


function App() {
  let [todos,setTodos] = useState([])

  function setState(newTodo){
    setTodos([{text:newTodo, index: todos.length},...todos])
  }

  function deleteTodo(id){
    console.log(id)
  }

  return (
    <div className="App">
      <Form setState={setState}></Form>
      <TodoList todos={todos} deleteTodo={deleteTodo}></TodoList>
    </div>
  );
}

export default App;
