import Todo from "./Todo";

function TodoList({todos}) {


  return (
    <div className="TodoList">
      {todos.map((todo) => (
          <Todo text={todo.text}></Todo>
      ))}
    </div>
  );
}

export default TodoList;
