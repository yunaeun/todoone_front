import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";
import { useTodoDispatch } from "../TodoContext";
import DeleteIcon from "@mui/icons-material/Delete";

function TodoItem({ id, done, text, date }) {
  const dispatch = useTodoDispatch();
  const [selectedId, SetselectedId] = useState(id);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  var currentData = JSON.parse(localStorage.getItem("Todo_Data") || "[]");
  /* console.log(currentData) */
  const onToggle = () => {
    dispatch({
      type: "TOGGLE",
      id,
      day,
      month,
      year,
    });

    var toggledDataset = currentData.map((seltodo) => {
      return seltodo.id === selectedId &&
        seltodo.day === day &&
        seltodo.month === month &&
        seltodo.year === year
        ? { ...seltodo, done: !seltodo.done }
        : seltodo;
    });

    localStorage.setItem("Todo_Data", JSON.stringify(toggledDataset));
  };

  const onRemove = () => {
    SetselectedId(id);
    console.log(selectedId);
    dispatch({
      type: "REMOVE",
      id,
      day,
      month,
      year,
    });
    var removedDataset = currentData.filter((seltodo) => {
      return (
        seltodo.id !== selectedId ||
        seltodo.day !== day ||
        seltodo.month !== month ||
        seltodo.year !== year
      );
    });
    console.log(removedDataset);

    localStorage.setItem("Todo_Data", JSON.stringify(removedDataset));
  };

  return (
    <>
      <ListItem
        sx={{ width: "100%" }}
        key={id}
        id={id}
        day={date.getDate()}
        month={date.getMonth()}
        secondaryAction={
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={onRemove}
            id={id}
            sx={{
              opacity: "0",
              transition: "0.5s",
              "&:hover": { opacity: "1" },
            }}
          >
            <DeleteIcon />
          </IconButton>
        }
        disablePadding
      >
        <ListItemButton
          role={undefined}
          dense
          sx={{
            backgroundColor: "white",
            marginTop: "10px",
            borderRadius: "10px",
          }}
        >
          <ListItemIcon>
            <Checkbox
              onClick={onToggle}
              edge="start"
              done={`${done}`}
              checked={done}
              disableRipple
            />
          </ListItemIcon>
          <ListItemText
            disableTypography
            sx={{
              fontSize: "30px",
            }}
          >
            {text}
          </ListItemText>
        </ListItemButton>
      </ListItem>
    </>
  );
}

export default TodoItem;
