import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledSVG = styled.svg`
  margin-left: 18px;
`;

export const Section = styled.section`
  max-width: 320px;
  margin: 0 auto;
  padding: 60px 0;

  @media (min-width: 768px) {
    max-width: 768px;
    margin: 0 auto;
    padding: 0 30px;
  }

  @media (min-width: 1440px) {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 128px;
  }
`;

export const Wrap = styled.div`
  @media (min-width: 768px) {
    padding: 78px 0 100px 0;
    position: relative;
    gap: 125px;
    align-items: center;
  }

  @media (min-width: 1440px) {
    padding: 78px 0 100px 0;
    display: flex;
    flex-direction: row;
    position: relative;
    gap: 125px;
    align-items: center;
  }
`;

export const WrapText = styled.div`
  @media (min-width: 1440px) {
    width: 595px;
    height: 438px;
  }
`;

export const H1 = styled.h1`
  font-size: 30px;
  font-weight: 500;
  line-height: 40px;
  letter-spacing: -3%;
  text-align: left;
  margin-bottom: 28px;

  @media (min-width: 768px) {
    font-size: 50px;
    font-weight: 600;
    font-size: 70px;
    line-height: 70px;
  }
  @media (min-width: 1440px) {
    font-size: 80px;
    line-height: 70px;
    margin-bottom: 20px;
  }
`;

export const HighlightedWord = styled.span`
  font-style: italic;
  color: #3470ff;
`;

export const H3 = styled.h3`
  font-size: 20px;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: -2%;
  text-align: left;
  letter-spacing: -0.02em;
  @media (min-width: 768px) {
    font-size: 25px;
  }
  @media (min-width: 1440px) {
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 20px;
    line-height: 133%;
    letter-spacing: -0.02em;
    color: #191a15;
    width: 480px;
  }
`;

export const Button = styled(Link)`
  background: transparent;
  color: #fbfbfb;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  width: 190px;
  height: 50px;
  border: 1px solid rgba(251, 251, 251, 0.4);
  background: #3470ff;
  margin: 50px 0;

  @media (min-width: 1440px) {
    width: 230px;
    height: 60px;
    gap: 10px;
    margin-top: 64px;
  }

  transition: var(--button-transition);

  &: hover {
    background: #255ee8;
    transform: scale(var(--button-scale));
  }

  &:hover ${StyledSVG} {
    transform: rotate(52deg);
    transition: var(--button-transition);
  }
`;

export const ExperienceWrap = styled.div`
  display: none;
@media (min-width: 768px) {
   display: flex;
   align-items: center;
   justify-content: center;
    position: absolute;
    bottom: 153px;
    right: 254px;
    z-index: 999;
    border-radius: 20px;

    background: #3470ff;
    width: 311px;
    height: 118px;


`;

export const ExperienceText = styled.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  color: rgba(251, 251, 251, 0.5);
`;

export const ExperienceNumber = styled.p`
  font-family: var(--font-family);
  font-weight: 700;
  font-size: 24px;
  color: #fbfbfb;
`;

export const Img = styled.img`
  display: none;
  @media (min-width: 768px) {
    display: block;
    width: 699px;
    margin-right: 0;
    margin-left: auto;
    border-radius: 10px;
    width: 464px;
    height: 526px;
  }
`;

export const CheckMarkWrap = styled.div`
  border-radius: 13px;
  width: 54px;
  height: 54px;
  background: #fbfbfb;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ExperienceTextWrap = styled.div`
  margin-left: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const StyledCheckMark = styled.svg`
  width: 20px;
  height: 20px;
  fill: var(--text-color--);
`;
