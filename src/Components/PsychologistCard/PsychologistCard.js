import { useState } from "react";
import Appointment from "../Appointment/Appointment";
import Modal from "../Modal/Modal";
import {
  ButtonAppointment,
  Buttons,
  Img,
  ImgWrap,
  Li,
  OnlineIconWrap,
  P,
  Paragraph,
  RatingWrap,
  ReviewerImg,
  ReviewerLetter,
  SpanColour,
  TitleName,
  Ul,
  WrapDetails,
  WrapIcons,
  WrapIconsBlock,
  WrapText,
} from "./PsychologistCard.styled";

const PsychologistCard = ({ psychologist }) => {
  const [isOpenMore, setIsOpenMore] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const toggleModal = () => {
    setIsOpenModal(!isOpenModal);
  };
  return (
    <div>
      <Ul>
        <Li key={psychologist.id}>
          <ImgWrap>
            <Img src={psychologist.avatar_url} alt="" />

            <OnlineIconWrap>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="7" cy="7" r="7" fill="#FBFBFB" />
                <circle cx="6.99967" cy="7.0001" r="4.66667" fill="#38CD3E" />
              </svg>
            </OnlineIconWrap>
          </ImgWrap>
          <WrapText>
            <WrapIcons>
              <P>Psychologist</P>

              <WrapIconsBlock>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <svg
                    style={{
                      fill: "#ffc531",
                      marginRight: "8px",
                    }}
                    width="16"
                    height="15"
                    viewBox="0 0 16 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.20021 4.69703L8 1.28579L9.79979 4.69703C9.95896 4.9987 10.2491 5.20947 10.5851 5.26762L14.3856 5.92519L11.6975 8.69103C11.4598 8.93563 11.3489 9.27666 11.3975 9.61427L11.9465 13.4319L8.48537 11.7301C8.17929 11.5795 7.82071 11.5795 7.51463 11.7301L4.05348 13.4319L4.6025 9.61427C4.65105 9.27666 4.54024 8.93563 4.30252 8.69103L1.6144 5.92519L5.41486 5.26762C5.75095 5.20947 6.04104 4.9987 6.20021 4.69703Z"
                      fill="#FFC531"
                      stroke="#FFC531"
                      stroke-width="1.2"
                    />
                  </svg>
                  Rating:{psychologist.rating}
                </div>

                <svg
                  width="2"
                  height="16"
                  viewBox="0 0 2 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1 0V16" stroke="#191A15" stroke-opacity="0.2" />
                </svg>
                <p>
                  <span>Price / 1 hour: {psychologist.price_per_hour}$</span>
                </p>
              </WrapIconsBlock>
            </WrapIcons>
            {/*
            <HeartButn type="button" id={nanny.id} onClick={handleFavorite}>
              <HeartIcon
                fill={
                  favoritesList.some(item => item.id === nanny.id) && isLogin
                    ? 'rgb(16, 57, 49)'
                    : 'none'
                }
              />
            </HeartButn> */}

            <TitleName>{psychologist.name}</TitleName>

            <WrapDetails>
              <Paragraph>
                Experience:
                <SpanColour> {psychologist.experience}</SpanColour>
              </Paragraph>

              <Paragraph>
                License:
                <SpanColour> {psychologist.license}</SpanColour>
              </Paragraph>

              <Paragraph>
                Specialization:
                <SpanColour> {psychologist.specialization}</SpanColour>
              </Paragraph>

              <Paragraph>
                Initial_consultation:
                <SpanColour> {psychologist.initial_consultation}</SpanColour>
              </Paragraph>
            </WrapDetails>

            <p>{psychologist.about}</p>
            {!isOpenMore && (
              <Buttons type="button" onClick={() => setIsOpenMore(true)}>
                Read more
              </Buttons>
            )}
            {isOpenMore && (
              <div style={{ marginTop: "48px" }}>
                {psychologist.reviews.map((review) => {
                  return (
                    <div style={{ marginBottom: "25px" }}>
                      <RatingWrap style={{ marginBottom: "16px" }}>
                        <ReviewerImg>
                          <ReviewerLetter>
                            {review.reviewer.slice(0, 1)}
                          </ReviewerLetter>
                        </ReviewerImg>

                        <div>
                          <h3>
                            <SpanColour>{review.reviewer}</SpanColour>
                          </h3>
                          <RatingWrap>
                            <svg
                              style={{
                                fill: "#ffc531",
                                marginRight: "8px",
                              }}
                              width="16"
                              height="15"
                              viewBox="0 0 16 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M6.20021 4.69703L8 1.28579L9.79979 4.69703C9.95896 4.9987 10.2491 5.20947 10.5851 5.26762L14.3856 5.92519L11.6975 8.69103C11.4598 8.93563 11.3489 9.27666 11.3975 9.61427L11.9465 13.4319L8.48537 11.7301C8.17929 11.5795 7.82071 11.5795 7.51463 11.7301L4.05348 13.4319L4.6025 9.61427C4.65105 9.27666 4.54024 8.93563 4.30252 8.69103L1.6144 5.92519L5.41486 5.26762C5.75095 5.20947 6.04104 4.9987 6.20021 4.69703Z"
                                fill="#FFC531"
                                stroke="#FFC531"
                                stroke-width="1.2"
                              />
                            </svg>
                            <p>
                              <SpanColour>{review.rating}</SpanColour>
                            </p>
                          </RatingWrap>
                        </div>
                      </RatingWrap>

                      <p>{review.comment}</p>
                    </div>
                  );
                })}
                <ButtonAppointment
                  type="button"
                  onClick={() => setIsOpenModal(true)}
                >
                  Make an appointment
                </ButtonAppointment>
                {isOpenModal && (
                  <Modal isOpen={isOpenModal} toggleModal={toggleModal}>
                    <Appointment
                      psychologist={psychologist}
                      toggleModal={toggleModal}
                      id={psychologist.id}
                    />
                  </Modal>
                )}
              </div>
            )}
          </WrapText>
        </Li>
      </Ul>
    </div>
  );
};

export default PsychologistCard;
