import Todo from "./Todo";
import "./TodoList.css"

function TodoList({todos, deleteTodo}) {


  return (
    <div className="TodoList">
        <div className="box">
            {todos.map((todo) => (
                <Todo text={todo.text} deleteTodo={deleteTodo} index={todo.index}></Todo>
            ))}
        </div>
    </div>
  );
}

export default TodoList;
