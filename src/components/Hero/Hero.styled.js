import styled from "styled-components";
import Button from "styles/GlobalComponents/Button";
import { Section, SectionTitle, SectionText } from "styles/GlobalComponents";

export const HeroSection = styled(Section)`
  /* height: calc(100% + 40vh); */
  height: 85vh;
  margin-top: 85px;

  @media ${(props) => props.theme.breakpoints.md} {
    height: 100%;
    margin-top: initial;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    height: 85vh;
    margin-top: initial;
  }
`;

export const HeroIcon = styled.span`
  display: none;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: block;
    /* align-self: center; */
    margin-top: 40px;
    margin-bottom: -50px;
  }
`;

export const HeroSectionTitle = styled(SectionTitle)`
  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 32px;
    margin-bottom: 30px;
    margin-top: 0px;
    line-height: 35px;
  }
`;

export const HeroSectionText = styled(SectionText)`
  @media ${(props) => props.theme.breakpoints.md} {
    margin-bottom: 30px;
  }
`;

export const LeftSection = styled.div`
  width: 100%;

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    height: 100%;
    justify-content: center;
  }
`;

export const ProfileName = styled("span")`
  /* background: linear-gradient(
    121.57deg,
    #ffffff 0.77%,
    rgba(255, 255, 255, 0.66) 0.15%
  ); */
  -webkit-text-fill-color: initial;
  /* color: #07080f; */
  color: #e66e1c;

  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  border-radius: 50px;
`;

export const HeroButton = styled(Button)`
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 25px 0px !important;

    font-size: 15.5px;
    font-weight: bold;
  }
`;
