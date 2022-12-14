import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";

export const Login = () => {
  let [userData, setData] = useState([]);

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputs; // 비구조화 할당

  function onChange(e) {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  }

  // 통신 메서드
  function searchApi() {
    const url = "https://9e87-210-180-194-253.jp.ngrok.io/login";
    axios
      .post(
        url,
        {
          email: email,
          password: password,
        },
        {
          withCredentials: true,
        }
      )
      .then(function (response) {
        setData(response.data);
        console.log("성공");
      })
      .catch(function (error) {
        console.log("실패");
      });
  }
  // 조회 데이터 존재하지 않을 경우
  return (
    <LoginBox>
      <LoginCon>
        <Logo alt="logo" src="images/logo.png" />
        <Email
          placeholder="이메일을 입력해주세요"
          type="email"
          onChange={onChange}
        />
        <Number
          placeholder="비밀번호를 입력해주세요"
          type="password"
          onChange={onChange}
        />
        <br></br>
        <Link to="/connect">
          <LoginBtn onClick={searchApi}>로그인</LoginBtn>
        </Link>
        <Link to="/signup">
          <SignBtn>회원가입하기</SignBtn>
        </Link>
        <br></br>
      </LoginCon>
    </LoginBox>
  );
};

const LoginBox = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #fff8ee;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const LoginCon = styled.div`
  background-color: #ffffff;
  display: flex;
  width: 29vw;
  height: 350px;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 20px;
  justify-content: center;
  box-shadow: 0 4px 4px -4px black;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.img`
  display: flex;
  width: 58px;
  height: 60px;
`;

const LoginBtn = styled.button`
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
`;

const Email = styled.input`
  border: 0px;
  font-size: 14px;
  padding-top: 20px;
  box-sizing: border-box;
  padding: 25px 2px 5px 2px;
  border-bottom: 1px solid #c4c4c4;
  width: 14vw;
  ::placeholder {
    color: #c4c4c4;
  }
  :focus {
    outline: none;
    color: #feb700;
    border-bottom: 1px solid #feb700;
    ::placeholder {
      color: #feb700;
    }
  }
`;

const Number = styled.input`
  border: 0px;
  font-size: 14px;
  padding-top: 20px;
  box-sizing: border-box;
  padding: 25px 2px 5px 2px;
  border-bottom: 1px solid #c4c4c4;
  width: 14vw;
  ::placeholder {
    color: #c4c4c4;
  }
  :focus {
    outline: none;
    color: #feb700;
    border-bottom: 1px solid #feb700;
    ::placeholder {
      color: #feb700;
    }
  }
`;

const SignBtn = styled.button`
  padding-top: 10px;
  font-size: 11px;
  border: 0px;
  background-color: #fff;
  padding-top: 5px;
  color: #d1ae73;
  border-bottom: 1px solid #d1ae73;
`;
