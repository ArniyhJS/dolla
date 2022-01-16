import styled from "styled-components";

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  overflow: hidden;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  height: 200px;
`;

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-auto-rows: 1fr;
  padding: 3rem;
  place-items: center;
  /* gap: 10rem; */
  row-gap: 8rem;
  margin-bottom: 20px;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    padding-bottom: 0;
    margin-bottom: 10px;
  }
`;
export const BlogCard = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 8px 8px 0px #f8cbb0, -8px -8px 0px #f8cbb0;
  text-align: center;
  max-width: 400px;
  width: 90%;
  height: 100%;

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;
export const TitleContent = styled.div`
  text-align: center;
  color: black;
  font-weight: 900;
  z-index: 20;
  width: 100%;
  margin-top: 15px;
`;

export const HeaderThree = styled.h3`
  font-weight: 700;
  /* letter-spacing: 2px; */
  color: #e66e1c;
  padding: 0.2rem 0;
  text-transform: uppercase;
  font-size: ${(props) => (props.title ? "2.5rem" : "1.5rem")};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 10px auto;
  margin-bottom: 15px;
  border: 0px;
  background: #e66e1c;
  border-radius: 5px;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: "Droid Serif", serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;

export const StackContainer = styled("div")`
  background: #f8cbb0;
  padding-top: 5px;
  margin-top: 15px;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 0;
  }
`;

export const CardInfo = styled.p`
  width: 100%;
  height: 25%;
  padding: 0 50px;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: left;
  overflow: auto;

  overflow-y: scroll;
  scrollbar-color: #000 #fff;

  &::-webkit-scrollbar {
    width: 5px;
    height: 5px;
    background-color: #000;
  }

  &::-webkit-scrollbar-thumb {
    background: black;
    height: 5px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.3rem;
    height: auto;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 40px 0;

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 35px 0;
  }
`;

export const ExternalLinks = styled.a`
  color: #d4c0c0;
  font-size: 1.6rem;
  padding: 1rem 1.5rem;
  /* background: #6b3030; */
  background: linear-gradient(
    180deg,
    rgba(238, 136, 65, 1) 0%,
    rgba(236, 120, 41, 1) 35%,
    rgba(230, 85, 28, 1) 100%
  );
  border-radius: 15px;
  transition: all 300ms ease-in;

  &:hover {
    transition: all 300ms ease-out;
    background: #801414;
    /* background: #13adc7; */
  }
`;

export const TagList = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 2rem 1rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0 1rem;
  }
`;
export const Tag = styled.li`
  color: #d8bfbf;
  font-size: 1.5rem;
  font-weight: bold;
  background: black;
  padding: 3px 10px;
  border-radius: 15px;

  border: 10px rgba(236, 120, 41, 1) double;

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 35px 0;
    font-size: 1.1rem;
  }
`;
