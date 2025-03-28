import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavBtn = styled.button`
  border: 1px solid rgba(25, 26, 21, 0.2);
  border-radius: 30px;
  padding: 14px 39px;
  width: 124px;
  height: 48px;
  padding: 0;

  &:hover {
    background: #3470ff;
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
`;



export const Logo = styled(NavLink)`
  display: none;
  color: var(--text-color--);
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: -2%;
  text-align: left;

  color: #3470ff;

  &:hover {
    color: #def6e7;
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
