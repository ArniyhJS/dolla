import styled from "styled-components";

export const ImageContainer = styled.div`
  text-align: center;
  background-image: radial-gradient(
    50% 50% at 50% 50%,
    rgba(79, 108, 176, 0.25) 53.8%,
    rgba(79, 108, 176, 0) 100%
  );
  width: 100%;
  padding: 60px;
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${(props) => props.theme.breakpoints.lg} {
    background-image: none;
    padding: 0;
    margin-top: 40px;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    background-image: none;
    padding: 0;
    margin-top: 16px;
  }
`;

export const MainImage = styled.img`
  width: 100%;
`;

export const List = styled.ul`
  list-style-type: none;
  display: grid;
  align-items: baseline;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 1fr;
  gap: 60px;
  margin: 3rem 0;

  @media ${(props) => props.theme.breakpoints.lg} {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    display: flex;
    flex-flow: row wrap;
    margin: 64px 0;
    gap: 24px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    margin: 32px 0;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    margin-left: 18px;
  }
`;

export const ListTitle = styled.h4`
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
  letter-spacing: 0.02em;
  color: #ec6b20;
  margin-bottom: 8px;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 24px;
    line-height: 28px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 20px;
    line-height: 28px;
    letter-spacing: 0.02em;
    margin-bottom: 4px;
  }
`;

export const ListParagraph = styled.p`
  font-size: 18px;
  line-height: 30px;
  color: rgba(255, 255, 255, 0.75);

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 16px;
    line-height: 28px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
    line-height: 22px;
  }
`;

export const ListItem = styled.li`
  max-width: 320px;
  display: flex;
  flex-direction: column;
  box-shadow: 8px 8px 0px #f8cbb0, -8px -8px 0px #f8cbb0;
  border-radius: 10px;

  padding: 20px 20px;
  padding-bottom: 30px;
  height: 100%;

  @media ${(props) => props.theme.breakpoints.lg} {
    max-width: 300px;
    /* width: 100%; */
    flex: auto;
    height: 250px;
    align-content: stretch;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    height: 200px;
    margin-bottom: 40px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-bottom: 14px;
    max-width: 320px;
    flex-direction: row;
    height: 150px;
    margin-bottom: 35px;
  }
`;

export const IconWrapper = styled.div`
  padding: 5px 5px;
`;

export const ListIcon = styled.img`
  display: block;
  width: 48px;
  height: 48px;
  margin-bottom: 10px;

  @media ${(props) => props.theme.breakpoints.md} {
    width: 40px;
    height: 40px;
    margin-bottom: 8px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 32px;
    height: 32px;
    margin-bottom: 0px;
  }
`;

export const HighLight = styled.span`
  font-weight: 900;
`;
