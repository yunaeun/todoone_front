import React, { useState, useEffect } from "react";
import { MdAddCircle } from "react-icons/md";
import { TiTrash, TiPencil } from "react-icons/ti";
import "./TodoInsert.css";
import styled from "styled-components";

export const Form = styled.div`
  display: flex;
`;

export const Pop = styled.div`
  display: flex;
  align-items: center;
`;

export const TodoInsert = ({
  onInsertToggle,
  onInsertTodo,
  selectedTodo,
  onRemove,
  onUpdate,
}) => {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onInsertTodo(value);
    setValue("");
    onInsertToggle();
  };

  useEffect(() => {
    if (selectedTodo) {
      setValue(selectedTodo.text);
    }
  }, [selectedTodo]);
  return (
    <Pop>
      <div className="background" onClick={onInsertToggle}></div>
      <Form>
        <form
          onSubmit={
            selectedTodo
              ? () => {
                  onUpdate(selectedTodo.id, value);
                }
              : onSubmit
          }
        >
          <input
            placeholder="please type"
            value={value}
            onChange={onChange}
          ></input>
          {selectedTodo ? (
            <div className="rewrite">
              <TiPencil
                onClick={() => {
                  onUpdate(selectedTodo.id, value);
                }}
              />
              <TiTrash
                onClick={() => {
                  onRemove(selectedTodo.id);
                }}
              />
            </div>
          ) : (
            <button type="submit">
              <MdAddCircle />
            </button>
          )}
        </form>
      </Form>
    </Pop>
  );
};

export default TodoInsert;
