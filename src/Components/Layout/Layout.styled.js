import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { IoMenuOutline } from "react-icons/io5";

export const NavBtn = styled.button`
  display: none;
  @media (min-width: 1440px) {
    border: 1px solid rgba(25, 26, 21, 0.2);
    border-radius: 30px;
    padding: 14px 39px;
    width: 100%;
    height: 48px;

    transition: background 0.3s ease; /* Плавний перехід */

    transition: var(--button-transition); /* Плавний перехід */

    &:hover {
      background: var(--button-bg);
      color: var(--button-text);
      transform: scale(var(--button-scale)); /* Збільшення на 5% */
    }
  }
`;

export const Nav = styled.nav`
  padding: 24px 0;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 20px;

  align-items: center;
  justify-content: space-between;

  z-index: 10;
  @media (min-width: 1440px) {
    padding: 0 128px;
    max-width: 1440px;
    margin: 0 auto;
    position: relative;
  }
`;
export const HeaderLine = styled.hr`
  // position: absolute;
  left: 0;
  width: 100vw;
  height: 2px;
  background: rgba(25, 26, 21, 0.1);
  border: none;
  margin: 0;
  z-index: 0; // Щоб лінія була на задньому фоні
`;

export const Logo = styled(NavLink)`
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: -2%;
  text-align: left;
  cursor: pointer;
  color: var(--highlight-color);

  transition: var(--button-transition); /* Плавний перехід */

  &:hover {
    color: rgb(29, 69, 162);
    transform: scale(var(--button-scale)); /* Збільшення на 5% */
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

export const BurgerMenuBtn = styled(IoMenuOutline)`
  position: fixed;
  top: 27px;
  right: 20px;
  width: 20px;
  height: 20px;
  @media (min-width: 1440px) {
    display: none;
  }
`;

export const BtnContainer = styled.div`
  display: none;
  @media (min-width: 1440px) {
    display: flex;
    justify-content: flex-end;
    margin-left: auto;
    padding: 0;
  }
`;

export const NavigationLink = styled(NavLink)`
  display: none;
  @media (min-width: 1440px) {
    display: flex;
    text-decoration: none;
    color: black;
    position: relative;
    transition: var(--button-transition); /* Плавний перехід */
  }

  &:hover {
    transform: scale(1.08); /* Збільшення на 5% */
    font-size: 19;
  }

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
