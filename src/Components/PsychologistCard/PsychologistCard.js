import React, { useEffect, useState } from "react";
import Appointment from "../Appointment/Appointment";
import Modal from "../Modal/Modal";
import {
  ButtonAppointment,
  Buttons,
  ForHoverCongtainer,
  HeartButn,
  Img,
  ImgWrap,
  InformationWrap,
  OnlineIconWrap,
  P,
  Paragraph,
  PhoneWrap,
  PsychologistAbout,
  RatingWrap,
  RatviewWrap,
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
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { selectorIsLoggin } from "../redux/userSlice";
import { addFavourite, deleteFavourite } from "../redux/userSlice";
import { motion } from "framer-motion";

const PsychologistCard = ({ psychologist }) => {
  const dispatch = useDispatch();

  const [isOpenMore, setIsOpenMore] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const favouritePsychologistList = useSelector(
    (state) => state.user.favouritesList
  );

  //перевіряємо, чи вже є психолог у списку фейворитів
  const isFavorite = (favouritePsychologistList || []).some(
    (fav) => fav.id === psychologist.id
  );

  const user = useSelector(selectorIsLoggin);

  const handleFavoriteClick = () => {
    if (!user) {
      toast.warn("This functionality is only available to authorized users!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      if (isFavorite) {
        dispatch(deleteFavourite(psychologist.id));
      } else {
        dispatch(addFavourite(psychologist));
      }
    }
  };

  const toggleModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  const [hasAnimated, setHasAnimated] = useState(false);
  useEffect(() => {
    // Запускаємо тільки після першого рендеру
    if (!hasAnimated) {
      const timer = setTimeout(() => {
        setHasAnimated(true); // після завершення анімації
      }, 500); // тривалість анімації має відповідати transition.duration
      return () => clearTimeout(timer);
    }
  }, [hasAnimated]);

  return (
    <div>
        <motion.li
          key={psychologist.id}
          layout
          initial={!hasAnimated ? { opacity: 0, scale: 0.95 } : undefined}
          animate={!hasAnimated ? { opacity: 1, scale: 1 } : undefined}
          transition={{
            opacity: { duration: 0.5, ease: "easeOut" }, // Анімація для першого рендеру
            scale: { duration: 0.5, ease: "easeOut" }, // Анімація для першого рендеру
          }}
        >
          <ForHoverCongtainer>
            <PhoneWrap>
              <ImgWrap>
                <Img src={psychologist.avatar_url} alt="" />
                <OnlineIconWrap>
                  <svg
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="7" cy="7" r="7" fill="#FBFBFB" />
                    <circle
                      cx="6.99967"
                      cy="7.0001"
                      r="4.66667"
                      fill="#38CD3E"
                    />
                  </svg>
                </OnlineIconWrap>
              </ImgWrap>
              <InformationWrap>
                <P>Psychologist</P>
                <TitleName>{psychologist.name}</TitleName>
              </InformationWrap>

              <RatingWrap>
                {" "}
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
                      strokeWidth="1.2"
                    />
                  </svg>
                  Rating:{psychologist.rating}
                </div>
                <svg
                  width="2"
                  height="22"
                  viewBox="0 0 2 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1 0V16" stroke="#191A15" strokeOpacity="0.2" />
                </svg>
                <p>
                  <span>Price / 1 hour: {psychologist.price_per_hour}$</span>
                </p>
              </RatingWrap>

              <HeartButn
                type="button"
                onClick={handleFavoriteClick}
                id={psychologist.id}
              >
                <svg
                  fill={isFavorite ? "#3470ff" : "none"}
                  stroke={isFavorite ? "#3470ff" : "#191A15"}
                  border-color={isFavorite ? "#3470ff" : "#191A15"}
                  viewBox="0 0 26 26"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.5766 4.99419C22.0233 4.44061 21.3663 4.00147 20.6433 3.70187C19.9202 3.40226 19.1452 3.24805 18.3625 3.24805C17.5798 3.24805 16.8047 3.40226 16.0817 3.70187C15.3586 4.00147 14.7016 4.44061 14.1483 4.99419L13 6.14252L11.8516 4.99419C10.734 3.87652 9.21809 3.24863 7.63747 3.24863C6.05685 3.24863 4.54097 3.87652 3.4233 4.99419C2.30563 6.11186 1.67773 7.62774 1.67773 9.20836C1.67773 10.789 2.30563 12.3049 3.4233 13.4225L4.57163 14.5709L13 22.9992L21.4283 14.5709L22.5766 13.4225C23.1302 12.8692 23.5693 12.2122 23.869 11.4892C24.1686 10.7661 24.3228 9.99105 24.3228 9.20836C24.3228 8.42566 24.1686 7.65064 23.869 6.92756C23.5693 6.20448 23.1302 5.54751 22.5766 4.99419Z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </HeartButn>
            </PhoneWrap>

            <WrapText>
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

              <PsychologistAbout>{psychologist.about}</PsychologistAbout>
              {!isOpenMore && (
                <Buttons
                  type="button"
                  onClick={() => setIsOpenMore(true)}
                  key={psychologist.id}
                >
                  Read more
                </Buttons>
              )}
              {isOpenMore && (
                <div style={{ marginTop: "48px" }}>
                  {psychologist.reviews.map((review) => {
                    return (
                      <div style={{ marginBottom: "25px" }}>
                        <RatviewWrap style={{ marginBottom: "16px" }}>
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
                                  strokeWidth="1.2"
                                />
                              </svg>
                              <p>
                                <SpanColour>{review.rating}</SpanColour>
                              </p>
                            </RatingWrap>
                          </div>
                        </RatviewWrap>

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
          </ForHoverCongtainer>
        </motion.li>
    </div>
  );
};

export default PsychologistCard;
