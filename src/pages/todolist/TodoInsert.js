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

export const Input = styled.input`
  width: 70%;
  height: 40px;
  border: 2px solid #e9dac1;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 10px;
`;

export const InputBox = styled.div`
  width: 70%;
  display: flex;
`;

export const Select = styled.select`
  height: 40px;
  border: 2px solid #e9dac1;
  box-sizing: border-box;
  border-radius: 10px;
  padding-left: 5px;
`;

export const TodoInsert = ({
  onInsertToggle,
  onInsertTodo,
  selectedTodo,
  onRemove,
  onUpdate,
}) => {
  const [value, setValue] = useState("");
  const [user, setUser] = useState(0);
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
        <form>
          <InputBox>
            <Input
              placeholder="please type"
              value={value}
              onChange={onChange}
            ></Input>
            &nbsp;&nbsp;&nbsp;
            <Select
              onChange={(e) => {
                setUser(e.target.value);
                console.log(e.target.value);
              }}
            >
              <option value={0}>나</option>
              <option value={1}>너</option>
              <option value={2}>우리</option>
            </Select>
          </InputBox>
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
            <button
              type="button"
              onClick={() => {
                onInsertTodo(value, user);
                setValue("");
                onInsertToggle();
              }}
            >
              <MdAddCircle />
            </button>
          )}
        </form>
      </Form>
    </Pop>
  );
};

export default TodoInsert;
