import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavBtn = styled.button`
  border: 1px solid rgba(25, 26, 21, 0.2);
  border-radius: 30px;
  padding: 14px 39px;
  width: 100%;
  height: 48px;

  &:hover {
    background: var(--button-bg);
    color: var(--button-text);
  }
`;

export const Nav = styled.nav`
  padding: 24px 0;
`;

export const Container = styled.nav`
  display: flex;
  flex-direction: row;

  align-items: center;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 128px;
  position: relative;
  z-index: 10;
`;
export const HeaderLine = styled.hr`
  position: absolute;
  left: 0;
  width: 100vw;
  height: 2px;
  background: rgba(25, 26, 21, 0.1);
  border: none;
  margin: 0;
  z-index: 0; // Щоб лінія була на задньому фоні
`;

export const Logo = styled(NavLink)`
  display: none;
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: -2%;
  text-align: left;
  cursor: pointer;
  color: var(--main-color);

  &:hover {
    color: rgb(29, 69, 162);
  }

  @media (min-width: 768px) {
    font-size: 24px;
    display: block;
  }
  @media (min-width: 1440px) {
    font-weight: 700;
    font-size: 20px;
    line-height: 120%;
    letter-spacing: -0.02em;
    margin-right: 135px;
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-left: auto;
  padding: 0;
`;

export const NavigationLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  position: relative;

  &.active::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -5px;
    width: 6px;
    height: 6px;
    background-color: blue;
    border-radius: 50%;
    transform: translateX(-50%);
  }
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
