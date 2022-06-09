import './Todo.css'

function Todo({text, index, deleteTodo}) {

   
    return (
      <div className="Todo">
        <h1>{text}</h1>
        <button>eddit</button>
        <button onClick={() => deleteTodo(index)}>delete</button>
      </div>
    );
  }
  
  export default Todo;
  