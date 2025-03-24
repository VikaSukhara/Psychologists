import {
  //   ArrowIcon,
  Button,
  //   CheckMarkIcon,
  CheckMarkWrap,
  ExperienceNumber,
  ExperienceText,
  ExperienceTextWrap,
  ExperienceWrap,
  //   GetStartLink,
  H1,
  HighlightedWord,
  H3,
  Img,
  Wrap,
  WrapText,
  StyledSVG,
  Section,
  StyledCheckMark,
} from "./HomeDefault.styled";
import backgroundImage from "../../images/backgroundImage.png";

function HomeDefault() {
  return (
    <Section>
      <Wrap>
        <div>
          {" "}
          <WrapText>
            <H1>
              The road to the <HighlightedWord>depths</HighlightedWord> of the
              human soul
            </H1>
            <H3>
              We help you to reveal your potential, overcome challenges and find
              a guide in your own life with the help of our experienced
              psychologists.
            </H3>
          </WrapText>
          <Button>
            Get Started
            <StyledSVG
              width="15"
              height="17"
              viewBox="0 0 15 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.8229 1.6731C12.7461 1.12619 12.2404 0.745143 11.6935 0.822006L2.78109 2.07456C2.23418 2.15143 1.85313 2.6571 1.92999 3.20401C2.00685 3.75092 2.51252 4.13196 3.05943 4.0551L10.9816 2.94172L12.095 10.8639C12.1718 11.4108 12.6775 11.7918 13.2244 11.715C13.7713 11.6381 14.1524 11.1324 14.0755 10.5855L12.8229 1.6731ZM1.79864 16.7895L12.6313 2.41409L11.034 1.21046L0.201365 15.5859L1.79864 16.7895Z"
                fill="#FBFBFB"
              />
            </StyledSVG>
          </Button>
        </div>

        <div>
          {" "}
          <ExperienceWrap>
            <CheckMarkWrap>
              <StyledCheckMark
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.5 12.5L5 15L12.5 22.5L25 10L22.5 7.5L12.5 17.5L7.5 12.5Z"
                  fill="#3470FF"
                />
              </StyledCheckMark>
            </CheckMarkWrap>

            <ExperienceTextWrap>
              <ExperienceText>Experienced nannies</ExperienceText>
              <ExperienceNumber>1500</ExperienceNumber>
            </ExperienceTextWrap>
          </ExperienceWrap>
          <Img src={backgroundImage} alt="backgroundImage" />
        </div>
      </Wrap>
    </Section>
  );
}
export default HomeDefault;
