import { NavLink } from "react-router-dom";
import styled from "styled-components";


export const Container = styled.div`
position: fixed;
  top: 0;
  left: 0;
  width: 100vw; /* вся ширина */
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
  top: 15px;
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

export const ConditionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
