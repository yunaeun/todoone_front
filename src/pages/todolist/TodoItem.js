import React from "react";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
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
  const { id, text, checked } = todo;
  return (
    <div className="TodoItem">
      <div className={`content ${checked ? "checked" : ""}`}>
        {checked ? (
          <Tod
            src="images/todo.png"
            onClick={() => {
              onCheckToggle(id);
            }}
          />
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
