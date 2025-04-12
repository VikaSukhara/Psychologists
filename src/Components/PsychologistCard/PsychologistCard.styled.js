import styled from "styled-components";

export const Wrap = styled.div`
  background-color: rgba(243, 243, 243, 1);
  margin-right: auto;
  margin-left: auto;
`;

export const Container = styled.div`
  padding: 10px 10px;
  overflow: scroll;
  height: 568px;

  @media (min-width: 768px) {
    padding: 40px 40px;
    height: 736px;
  }
  @media (min-width: 1440px) {
    padding: 64px 128px 100px 128px;
  }
`;

export const SelectWrap = styled.div`
  margin-bottom: 32px;
  width: 226px;
`;

export const Label = styled.label`
  gap: 8px;
  display: flex;
  flex-direction: column;
  color: rgb(138, 138, 137);

  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0%;
`;

export const Select = styled.select`
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 10px;
  width: 100%;
  height: 40px;
  background: var(--main-color);
  color: var(--text-color);

  & option:checked {
    cursor: pointer;
    color: var(--text-color);

    font-size: 12px;
    font-weight: 500;
    line-height: 14px;
    letter-spacing: 0%;
  }

  & option {
    cursor: pointer;
    color: gray;

    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0%;
    border-radius: 14px;
  }

  @media (min-width: 768px) {
    padding: 10px 18px;
    border-radius: 14px;
    width: 226px;
    height: 48px;

    & option:checked {
      font-size: 18px;
      font-weight: 500;
    }

    & option {
      font-size: 18px;

      border-radius: 14px;
    }
    & select option {
      border-radius: 14px;
    }
  }
`;

export const Button = styled.button`
  display: block;
  border-radius: 30px;
  padding: 10px 20px;

  background: var(--main-color);
  color: var(--text-color);

  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -1%;

  margin-left: auto;
  margin-right: auto;

  &:hover {
    border: 1px solid var(--main-color);
    background: rgba(16, 57, 49, 0.2);
    color: var(--main-color);
  }

  @media (min-width: 768px) {
    border-radius: 30px;
    background: var(--main-color);
    padding: 14px 40px;
    font-size: 16px;
    margin-top: 25px;
  }
`;

////////////////////////......

// import { ReactComponent as Map } from '../../img/map.svg';
// import { ReactComponent as Star } from '../../img/star.svg';
// import { ReactComponent as Heart } from '../../img/heart.svg';
// import { ReactComponent as Stick } from '../../img/stick.svg';
// import { ReactComponent as Online } from '../../img/online.svg';

// export const MapIcon = styled(Map)`
//   width: 10px;
//   height: 10px;
//   @media (min-width: 768px) {
//     width: 16px;
//     height: 16px;
//   }
// `;
// export const StarIcon = styled(Star)`
//   margin-right: 4px;
//   width: 10px;
//   height: 10px;
//   @media (min-width: 768px) {
//     width: 16px;
//     height: 16px;
//   }
// `;

export const HeartButn = styled.button`
  position: absolute;
  top: 16px;
  right: 24px;
  background: transparent;
  @media (min-width: 768px) {
    top: 24px;
  }
`;

export const Ul = styled.ul`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
`;

export const ForHoverCongtainer = styled.div`
  gap: 22px;
  position: relative;

  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0%;
  border-radius: 15px;

  padding: 15px 15px;
  width: 310px;
  display: flex;
  flex-direction: row;
  margin-bottom: 32px;
  color: rgb(138, 138, 137);
  background-color: var(--button-text);

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
    border-radius: 18px;
    width: 721px;
    padding: 20px 20px;
  }

  @media (min-width: 1440px) {
    width: 1184px;
    font-size: 16px;
    line-height: 24px;
    border-radius: 24px;
    padding: 24px 24px;
  }

  transition: transform 0.5s ease-out;

  &:hover {
    transform: scale(var(--button-scale));
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
`;

export const ImgWrap = styled.div`
  padding: 4px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid rgba(84, 190, 150, 0.2);
  border-radius: 15px;
  position: relative;

  // @media (min-width: 768px) {
  //   border-radius: 15px;
  //   padding: 8px;
  //   height: 88px;
  // }

  @media (min-width: 1440px) {
    border-radius: 30px;
    padding: 12px;
    height: 120px;
    width: 120px;
  }
`;

export const Img = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 12px;

  // @media (min-width: 768px) {
  //   width: 70px;
  //   height: 70px;
  //   border-radius: 15px;
  // }

  @media (min-width: 1440px) {
    width: 96px;
    height: 96px;
    border-radius: 15px;
    object-fit: cover;
  }
`;

export const RatingWrap = styled.div`
  display: none;
  @media (min-width: 1440px) {
    display: block;
  }
`;

export const WrapText = styled.div``;

export const P = styled.p`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #8a8a89;
`;

export const WrapIcons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (min-width: 768px) {
    padding-right: 50px;
  }
`;

export const WrapIconsBlock = styled.div`
  display: none;

  @media (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    gap: 16px;
    align-items: center;
  }
`;

export const OnlineIconWrap = styled.div`
  position: absolute;
  top: 0px;
  right: 2px;
  width: 10px;
  height: 10px;
  @media (min-width: 768px) {
    width: 14px;
    height: 14px;
    top: 3px;
    right: 3px;
  }

  @media (min-width: 1440px) {
    width: 14px;
    height: 14px;
    top: 7px;
    right: 13px;
  }
`;

export const TitleName = styled.h2`
  color: var(--span-color);

  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0%;
  margin-bottom: 15px;
  margin-top: 8px;

  font-weight: 500;

  line-height: 100%;

  @media (min-width: 768px) {
    font-size: 24px;
    margin-bottom: 24px;
    margin-top: 8px;
  }
`;

export const SpanColour = styled.span`
  color: var(--span-color);

  font-size: 12px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0%;

  @media (min-width: 768px) {
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0%;
  }
`;

export const WrapDetails = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 24px;
  }
`;

export const Paragraph = styled.div`
  width: auto;
  padding: 4px 8px;
  border-radius: 24px;
  background: rgb(243, 243, 243);
`;

export const Buttons = styled.button`
  color: var(--span-color);
  border: none;

  font-size: 12px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0%;
  text-align: left;
  text-decoration-line: underline;
  background-color: transparent;
  margin-top: 16px;

  @media (min-width: 768px) {
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
  }

  transition: var(--button-transition); /* Плавний перехід */

  &:hover {
    transform: scale(var(--button-scale)); /* Збільшення на 5% */
  }
`;

export const RatviewWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;

export const ReviewerImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: rgba(52, 112, 255, 0.2);
  margin-right: 8px;

  @media (min-width: 768px) {
    width: 44px;
    height: 44px;
  }
`;
export const ReviewerLetter = styled.span`
  color: var(--span-color);

  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0%;
`;

export const ButtonAppointment = styled.button`
  display: block;
  border-radius: 15px;
  background: var(--main-color);
  padding: 10px 20px;
  color: var(--text-color);

  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -1%;
  margin-top: 25px;

  @media (min-width: 768px) {
    border-radius: 30px;
    padding: 14px 40px;
    font-size: 16px;
  }
`;

export const Heart = styled.div`
  top: 24px;
  right: 24px;
  position: absolute;
`;
