import { styled } from "@mui/material/styles";
import { Grid, Paper } from "@mui/material";
import DatePicker from "react-datepicker";
import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { TodoProvider } from "./TodoContext";
import TodoHead from "./TodoList/TodoHead";
import TodoLists from "./TodoList/TodoLists";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#FFFAF4",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: "700px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
}));

const Content = () => {
  const [date, setDate] = useState(new Date());

  /* console.log(date.getDate(), date.getMonth() + 1); */

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Item>
          <DatePicker
            selected={date}
            onChange={(date) => setDate(date)}
            inline
          />
        </Item>
      </Grid>
      <Grid item xs={12} md={6}>
        <Item sx={{ display: "flex", flexDirection: "column" }}>
          <TodoProvider>
            <TodoHead date={date} />
            <TodoLists date={date} />
          </TodoProvider>
        </Item>
      </Grid>
    </Grid>
  );
};

export default Content;
