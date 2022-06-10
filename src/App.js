import { useEffect, useState } from "react";
import "./app.css"
import Form from "./Form";
import TodoList from "./TodoList";


function App() {
  const [todos,setTodos] = useState([])

  function deleteTodo(index){
    var newArr = []
    todos.map((test) => {
      if(test.index!=index){
        newArr.push(test)
      }
    })
    setTodos(newArr)
  }


  function setState(newTodo){
    setTodos([{text:newTodo, index: todos.length},...todos])
  }

  

  return (
    <div className="App">
      <Form setState={setState}></Form>
      <TodoList todos={todos} deleteTodo={deleteTodo}></TodoList>
    </div>
  );
}

export default App;
