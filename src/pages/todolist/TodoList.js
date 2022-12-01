import React from "react";
import TodoItem from "./TodoItem";
import styled from "styled-components";

const TodoList = ({
  todos,
  onCheckToggle,
  onInsertToggle,
  onChangeSelectedTodo,
}) => {
  return (
    <TodoList2>
      {todos.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          onCheckToggle={onCheckToggle}
          onInsertToggle={onInsertToggle}
          onChangeSelectedTodo={onChangeSelectedTodo}
        />
      ))}
    </TodoList2>
  );
};

const TodoList2 = styled.div`
  width: 90vw;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 20px;
`;

export default TodoList;
