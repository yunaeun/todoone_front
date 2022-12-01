import { Button, InputBase, List, Paper } from "@mui/material";
import React, { useState } from "react";
import { useTodoDispatch, useTodoState } from "../TodoContext";
import AddIcon from "@mui/icons-material/Add";
import TodoItem from "./TodoItem";

const TodoLists = ({ date }) => {
  const todos = useTodoState();

  const dispatch = useTodoDispatch();

  const [open, setOpen] = useState(false);
  const onOpen = () => setOpen(!open);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  var currentData = JSON.parse(localStorage.getItem("Todo_Data") || "[]");

  const selectedDateData = todos.filter(
    (todos) => todos.day === day && todos.month === month
  );
  var nextId = parseInt(selectedDateData.length) + 1;

  const [value, setValue] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      id: nextId,
      text: value,
      done: false,
      day: day,
      month: month,
      year: year,
    };

    if (value === "") {
      alert("텍스트를 입력해주세요");
      return;
    }
    dispatch({
      type: "CREATE",
      todo: {
        id: nextId,
        text: value,
        done: false,
        day: day,
        month: month,
        year: year,
      },
    });
    setValue("");
    setOpen(false);
    currentData.push(data);

    localStorage.setItem("Todo_Data", JSON.stringify(currentData));
    /*    console.log(currentData); */

    nextId = nextId + 1;
  };
  const onChange = (e) => setValue(e.target.value);

  return (
    <div>
      <List
        sx={{
          width: "450px",
          bgcolor: "background.papaer",
          height: "400px",
          overflow: "auto",
        }}
      >
        {selectedDateData.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            text={todo.text}
            done={todo.done}
            date={date}
          />
        ))}
      </List>
      {open ? (
        <>
          <Paper
            component="form"
            onSubmit={onSubmit}
            sx={{
              display: "flex",
              width: "400px",
              height: "100px",
              position: "absolute",
              bottom: "30px",
              left: "50%",
              transform: "translate(-50%,-50%)",
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="할 일을 입력해주세요"
              onChange={onChange}
              inputProps={{ style: { textAlign: "center" } }}
            />
          </Paper>
          <Button
            onClick={onSubmit}
            variant="contained"
            sx={{
              position: "absolute",
              bottom: "40px",
              left: "50%",
              transform: "translate(-50%,-50%)",
              backgroundColor: "#E9DAC1",
            }}
          >
            추가하기
          </Button>
        </>
      ) : (
        <Button
          onClick={onOpen}
          variant="contained"
          endIcon={<AddIcon />}
          sx={{
            position: "absolute",
            bottom: "40px",
            left: "50%",
            transform: "translate(-50%,-50%)",
            backgroundColor: "#E9DAC1",
          }}
        >
          일정 추가
        </Button>
      )}
    </div>
  );
};

export default TodoLists;
