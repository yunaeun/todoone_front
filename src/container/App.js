import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "../pages/login/login";
import { Start } from "../pages/login/index";
import { Todo } from "./Todo";
import { Signup } from "../pages/signup";
import { Connect } from "../pages/connect";
import { Calendar } from "../pages/calendar";

const App = () => {
  return (
    <Routes>
      <Route path="/todo" element={<Todo />} />
      <Route path="/connect" element={<Connect />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/" element={<Start />} />
      <Route path="*" element={<Start />} />
    </Routes>
  );
};

export default App;
