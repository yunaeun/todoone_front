import React from "react";
import "./TodoItem.css";
import styled from "styled-components";

const Tod = styled.img`
  display: flex;
  width: 25px;
`;

const TodoItem = ({
  todo,
  onCheckToggle,
  onInsertToggle,
  onChangeSelectedTodo,
}) => {
  let { id, text, checked, user } = todo;
  user = Number(user);
  return (
    <div className="TodoItem">
      <div className={`content ${checked ? "checked" : ""}`}>
        {checked ? (
          user === 0 ? (
            <Tod
              src="images/todo.png"
              onClick={() => {
                onCheckToggle(id);
              }}
            />
          ) : user === 1 ? (
            <Tod
              src="images/todo2.png"
              onClick={() => {
                onCheckToggle(id);
              }}
            />
          ) : (
            <Tod
              src="images/logo.png"
              onClick={() => {
                onCheckToggle(id);
              }}
            />
          )
        ) : (
          <Tod
            src="images/todonone.png"
            onClick={() => {
              onCheckToggle(id);
            }}
          />
        )}
        <div
          className="text"
          onClick={() => {
            onChangeSelectedTodo(todo);
            onInsertToggle();
          }}
        >
          &nbsp;&nbsp;
          {text}
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
