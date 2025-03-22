import styled from 'styled-components';
// import { Link } from 'react-router-dom';
// import { ReactComponent as CheckMark } from '../../img/experience.svg';
// import { ReactComponent as Arrow } from '../../img/arrow.svg';

export const Wrap = styled.div`
  margin-right: auto;
  margin-left: auto;
  width: 320px;
  background-color: rgba(16, 57, 49, 1);
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  border: 1px solid rgba(251, 251, 251, 0.4);
  width: 100%;
  @media (min-width: 768px) {
  }
  @media (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    position: relative;
    max-width: 1440px;
  }
`;

export const WrapText = styled.div`
  padding: 50px 30px;
  min-height: 568px;

  @media (min-width: 768px) {
    min-height: 736px;
  }
  @media (min-width: 1440px) {
    padding: 163px 64px 163px 96px;
    min-height: 736px;
  }
`;

export const ExperienceWrap = styled.div`
  display: none;
  position: absolute;
  bottom: 50px;
  right: 50px;
  z-index: 9999;

  padding: 32px;
  border-radius: 20px;
  width: 284px;
  height: 118px;

  background: rgb(251, 251, 251);

  @media (min-width: 1440px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const ExperienceText = styled.p`
  color: var(--paragraph-color--);

  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0%;
  text-align: left;
`;

export const ExperienceNumber = styled.p`
  color: var(--span-color--);

  font-size: 24px;
  font-weight: 700;
  line-height: 29px;
  letter-spacing: 0%;
  text-align: left;
`;

export const Img = styled.img`
  display: none;

  @media (min-width: 1440px) {
    display: block;
    width: 699px;
    margin-right: 0;
    margin-left: auto;
  }
`;

export const H1 = styled.h1`
  color: #fbfbfb;

  font-size: 30px;
  font-weight: 500;
  line-height: 40px;
  letter-spacing: -3%;
  text-align: left;
  margin-bottom: 28px;

  @media (min-width: 768px) {
    font-size: 50px;
  }
  @media (min-width: 1440px) {
    font-size: 70px;

    line-height: 70px;
  }
`;

export const H3 = styled.h3`
  color: #fbfbfb;

  font-size: 20px;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: -2%;
  text-align: left;

  @media (min-width: 768px) {
    font-size: 25px;
  }
  @media (min-width: 1440px) {
    font-size: 28px;
  }
`;
// export const ArrowIcon = styled(Arrow)`
//   margin-left: 18px;
//   &:hover {
//     transform: rotate(90deg);
//   }


// `;

  /* &:hover ${ArrowIcon} {
    transform: rotate(52deg);
    } */

export const Button = styled.button`
  background: transparent;
  color: #fbfbfb;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  margin-top: 90px;
  width: 190px;
  height: 50px;
  border: 1px solid rgba(251, 251, 251, 0.4);
  background: #3470ff;



  @media (min-width: 768px) {
  }
  @media (min-width: 1440px) {
    width: 230px;
    height: 60px;
    gap: 18px;
    margin-top: 64px;
  }
`;

// export const GetStartLink = styled(Link)`
//   font-weight: 700;
//   font-size: 18px;
//   line-height: 1.56;
//   border-radius: 12px;
//   color: #fbfbfb;
// `;

export const CheckMarkWrap = styled.div`
  border-radius: 13px;
  width: 54px;
  height: 54px;
  background: var(--main-color--);
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

// export const CheckMarkIcon = styled(CheckMark)`
//   width: 20px;
//   height: 20px;
//   fill: var(--text-color--);
// `;