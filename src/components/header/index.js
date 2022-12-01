import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Header = () => {
  return (
    <>
      <Head>
        <Logo alt="logo" src="images/headerlogo.png" />
        <Nav>
          <NavLink to="/todo">todo</NavLink>
          <NavLink to="/calendar">calendar</NavLink>
          <NavLink to="/counsel">logout</NavLink>
        </Nav>
      </Head>
    </>
  );
};

export const Head = styled.div`
  display: flex;
  height: 50px;
  width: 100%;
  padding: 0 12%;
  box-sizing: border-box;
  justify-content: space-between;
  background-color: #e9dac1;
`;

export const Logo = styled.img`
  display: flex;
  height: 35px;
  padding-top: 3px;
`;

export const Nav = styled.nav`
  display: flex;
  align-self: center;
  font-size: 17px;
  width: 220px;
  justify-content: space-between;
`;
