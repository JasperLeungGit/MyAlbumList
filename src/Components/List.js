import React, { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import TodoService from "../Services/TodoService";

const Todos = (props) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    TodoService.getList(props.match.params.username).then((data) => {
      setTodos(data.todos);
    });
  }, []);

  return (
    <div>
      <ul className="list-group">
        {todos.map((todo) => {
          return <TodoItem key={todo._id} todo={todo} />;
        })}
      </ul>
      <br />
    </div>
  );
};

export default Todos;
