import { useState } from "react";
import "./app.css"
import Form from "./Form";
import TodoList from "./TodoList";


function App() {
  let [todos,setTodos] = useState([{text: "this is a todo"}])

  function setState(newTodo){
    // console.log(newTodo)
    setTodos([{text:newTodo},...todos])
  }

  return (
    <div className="App">
      <Form setState={setState}></Form>
      <TodoList todos={todos}></TodoList>
    </div>
  );
}

export default App;
