import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Signup = () => {
  return (
    <SignupBox>
      <SignupCon>
        <Logo alt="logo" src="images/logo.png" />
        <NickName placeholder="닉네임을 입력해주세요" type="text" />
        <NickName placeholder="이름을 입력해주세요" type="text" />
        <Number placeholder="비밀번호를 입력해주세요" type="number" />
        <Number placeholder="비밀번호를 다시 입력해주세요" type="number" />
        <Email placeholder="이메일을 입력해주세요" type="email" />
        <BirtyDay>생년월일</BirtyDay>
        <Date type="date" />
        <br></br>
        <br></br>
        <Link to="/login">
          <SignupBtn>회원가입</SignupBtn>
        </Link>
        <br></br>
      </SignupCon>
    </SignupBox>
  );
};

const SignupBox = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #fff8ee;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const SignupCon = styled.div`
  background-color: #ffffff;
  display: flex;
  width: 29vw;
  height: 530px;
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
  width: 58px;
  height: 60px;
  padding-bottom: 15px;
`;

const SignupBtn = styled.button`
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

const NickName = styled.input`
  border: 0px;
  border-bottom: 1px solid #c4c4c4;
  font-size: 14px;
  width: 14vw;
  box-sizing: border-box;
  font-weight: 400;
  padding: 25px 2px 5px 2px;
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
  color: #838383;
  border-bottom: 1px solid #838383;
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

const Date = styled.input`
  display: flex;
  width: 14vw;
  border: 1px solid #c4c4c4;
  :focus {
    border: 1px solid #feb700;
  }
`;

const BirtyDay = styled.h4`
  display: flex;
  font-size: 14px;
  color: #c4c4c4;
  padding: 20px 0 10px;
`;
