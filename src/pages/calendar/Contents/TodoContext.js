import React, { createContext, useContext, useReducer, useRef } from "react";
const Datas = JSON.parse(localStorage.getItem("Todo_Data") || "[]");
const initialTodos = Datas.map((data, index) => {
  return data;
});

function todoReducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return state.concat(action.todo);

    case "REMOVE":
      return state.filter((todo) => {
        return (
          todo.id !== action.id ||
          todo.day !== action.day ||
          todo.month !== action.month
        );
      });

    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.id &&
        todo.day === action.day &&
        todo.month === action.month
          ? { ...todo, done: !todo.done }
          : todo
      );

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  const nextId = useRef(Datas.length);

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>
          {children}
        </TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

export function useTodoState() {
  const context = useContext(TodoStateContext);
  if (!context) {
    throw new Error("Cannot find TodoProvider");
  }
  return context;
}

export function useTodoDispatch() {
  const context = useContext(TodoDispatchContext);
  if (!context) {
    throw new Error("Cannot find TodoProvider");
  }
  return context;
}

export function useTodoNextId() {
  const context = useContext(TodoNextIdContext);
  if (!context) {
    throw new Error("Cannot find TodoProvider");
  }
  return context;
}
