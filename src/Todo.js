import './Todo.css'

function Todo({text, index, deleteTodo}) {

  return (
    <div className="Todo">
      <div className='box'>
        <h1>{text}</h1>
        <button>eddit</button>
        <button onClick={()=>deleteTodo(index)}>delete</button>
      </div>
    </div>
  );
}
  
export default Todo;
  