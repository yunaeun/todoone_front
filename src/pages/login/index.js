import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Start = () => {
  return (
    <StartBox>
      <StartCon>
        <Logo alt="logo" src="images/logo.png" />
        <Link to="/login">
          <StartBtn>로그인</StartBtn>
        </Link>
        <Link to="/signup">
          <StartBtn>회원가입</StartBtn>
        </Link>
      </StartCon>
    </StartBox>
  );
};

const StartBox = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #fff8ee;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const StartCon = styled.div`
  background-color: #ffffff;
  display: flex;
  width: 29vw;
  height: 270px;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 20px;
  justify-content: center;
  box-shadow: 0 1px 20px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.img`
  display: flex;
  width: 65px;
  height: 70px;
  padding-bottom: 20px;
`;

const StartBtn = styled.button`
  display: flex;
  width: 12vw;
  height: 40px;
  border: 2.5px solid #e9dac1;
  background-color: #fff;
  border-radius: 10px;
  justify-content: center;
  line-height: 38px;
  color: #e9dac1;
  font-size: 15px;
  margin-top: 10px;
`;
