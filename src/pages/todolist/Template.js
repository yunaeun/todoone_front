import React from "react";
import styled from "styled-components";

export const Temp = styled.div`
  padding-top: 20px;
  max-height: 100vh;
  width: 60vw;
  height: 100vh;
  background-color: white;
`;

export const Title = styled.div`
  width: 100%;
  font-size: 20px;
  padding-left: 15px;
  font-weight: bold;
  color: #565656;
`;

export const To = styled.div`
  display: flex;
  color: #565656;
`;

export const Template = ({ children, todoLength }) => {
  return (
    <Temp>
      <Title>오늘의 할 일 ({todoLength})</Title>
      <br></br>
      <To>{children}</To>
    </Temp>
  );
};
