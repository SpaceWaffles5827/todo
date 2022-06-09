import { useEffect, useState } from "react";
import "./app.css"
import Form from "./Form";
import TodoList from "./TodoList";


function App() {
  let [todos,setTodos] = useState([])


  function setState(newTodo){
    setTodos([{text:newTodo, index: todos.length},...todos])
  }

  function deleteTodo(index){
    // todos.splice(index+1)
    // console.log(todos)
    
  }

  return (
    <div className="App">
      {console.log(todos)}
      <Form setState={setState}></Form>
      <TodoList todos={todos} deleteTodo={deleteTodo}></TodoList>
    </div>
  );
}

export default App;
