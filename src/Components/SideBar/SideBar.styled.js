import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgb(249, 249, 249);
  padding: 15px;
  z-index: 100;
  display: flex;
  flex-direction: column;
  padding-top: 50px;

  transform: ${({ visible }) =>
    visible ? "translateX(0)" : "translateX(100%)"};
  transition: transform 0.7s ease-in-out;
`;

export const Button = styled.button`
  color: var(--span-color: );
  position: absolute;
  right: 15px;
  top: 24px;
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 70px;
`;

export const NavigationLink = styled(NavLink)`
  font-size: 35px;
  color: black;
  position: relative;
  text-align: center;

  &.active {
    color: blue;
  }
`;

export const NavBtn = styled.button`
  display: block;
  border: 1px solid rgba(25, 26, 21, 0.2);
  border-radius: 30px;
  padding: 14px 25px;
  width: 80%;
  height: 48px;
  margin-bottom: 15px;
`;

export const NavBtnLogOut = styled.button`
  display: block;
  border: 1px solid rgba(25, 26, 21, 0.2);
  border-radius: 30px;
  padding: 14px 25px;
  width: 80%;
  height: 48px;
`;

export const ConditionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 150px;
`;

export const UserIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  width: 40px;
  height: 40px;
  background: var(--button-bg);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UserName = styled.h3`
  font-weight: 500;
  font-size: 16px;
  line-height: 125%;
  letter-spacing: -0.01em;
  color: var(--heading-color);
  margin-right: 28px;
`;
