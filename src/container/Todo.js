import React, { useState } from "react";
import { Template } from "../pages/todolist/Template";
import TodoList from "../pages/todolist/TodoList";
import { MdAddCircle } from "react-icons/md";
import TodoInsert from "../pages/todolist/TodoInsert";
import styled from "styled-components";
import { Header } from "../components/header";

export const AddTodoButton = styled.button`
  display: flex;
  border: 0;
  width: 120px;
  height: 30px;
  cursor: pointer;
  color: #00d43e;
  border-radius: 10px;
  line-height: 30px;
  padding-left: 13px;
  margin-top: -45px;
  margin-right: 20px;
`;

export const TodoBox = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

let nextId = 4;

export const Todo = () => {
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [insertToggle, setInsertToggle] = useState(false);
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "할일 1",
      checked: true,
    },
    {
      id: 2,
      text: "할일 2",
      checked: false,
    },
    {
      id: 3,
      text: "할일 3",
      checked: true,
    },
  ]);

  const onInsertToggle = () => {
    if (selectedTodo) {
      setSelectedTodo(null);
    }
    setInsertToggle((prev) => !prev);
  };

  const onInsertTodo = (text, user) => {
    if (text === "") {
      return alert("할 일을 입력해주세요.");
    } else {
      const todo = {
        id: nextId,
        text,
        checked: false,
        user: user,
      };
      setTodos((todos) => todos.concat(todo));
      nextId++;
    }
  };

  const onCheckToggle = (id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  const onChangeSelectedTodo = (todo) => {
    setSelectedTodo(todo);
  };

  const onRemove = (id) => {
    onInsertToggle();
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  const onUpdate = (id, text, user) => {
    onInsertToggle();
    setTodos((todos) => {
      todos.map((todo) => (todo.id === id ? { ...todo, text, user } : todo));
    });
    console.log(todos.length);
  };

  return (
    <TodoBox>
      <Header />
      <Template todoLength={todos.length}>
        <TodoList
          todos={todos}
          onCheckToggle={onCheckToggle}
          onInsertToggle={onInsertToggle}
          onChangeSelectedTodo={onChangeSelectedTodo}
        />
        <AddTodoButton onClick={onInsertToggle}>추가하기</AddTodoButton>
        {insertToggle && (
          <TodoInsert
            selectedTodo={selectedTodo}
            onInsertToggle={onInsertToggle}
            onInsertTodo={onInsertTodo}
            onRemove={onRemove}
            onUpdate={onUpdate}
          />
        )}
      </Template>
    </TodoBox>
  );
};

export default Todo;
