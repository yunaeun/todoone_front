import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Connect = () => {
  return (
    <ConnectBox>
      <ConnectCon>
        <Logo alt="logo" src="images/logo.png" />
        <ConInput placeholder="상대커플코드를 입력해주세요" />
        <Code>내코드 : 1234</Code>
        <Link to="/todo">
          <ConnectBtn>커플연동하기</ConnectBtn>
        </Link>
      </ConnectCon>
    </ConnectBox>
  );
};

const ConnectBox = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #fff8ee;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ConnectCon = styled.div`
  background-color: #ffffff;
  display: flex;
  width: 29vw;
  height: 300px;
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

const ConnectBtn = styled.button`
  display: flex;
  width: 14.5vw;
  height: 35px;
  border: 0;
  background-color: #e9dac1;
  border-radius: 50px;
  justify-content: center;
  line-height: 35px;
  color: white;
  font-size: 14px;
  font-weight: 400;
`;

const ConInput = styled.input`
  display: flex;
  width: 14.5vw;
  height: 40px;
  padding: 10px;
  box-sizing: border-box;
  background-color: #f4f4f4;
  border-radius: 5px;
  color: #a8a8a8;
  border: 0;
  :focus {
    color: #feb700;
  }
`;

const Code = styled.h4`
  display: flex;
  font-size: 12px;
  font-weight: 400;
  color: #cd9f52;
  padding: 10px;
`;
