import styled from "styled-components";

export const CertificationsContainer = styled("div")`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 1fr;
  gap: 80px;
  width: 90%;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding: 50px 0;

  @media ${(props) => props.theme.breakpoints.lg} {
    display: flex;
    flex-flow: row wrap;
    gap: 5rem;
  }
`;

export const CertificateCard = styled("div")`
  /* border: 2px solid rgba(255, 255, 255, 0.5); */
  box-shadow: 8px 8px 0px #f8cbb0, -8px -8px 0px #f8cbb0;
  border-radius: 10px;
  width: 250px;
  height: 100%;
  display: flex;
  flex: 0 1 250px;
  cursor: pointer;
  overflow: hidden;
  flex-direction: column;
  transition: transform 300ms ease-in-out;

  &:hover {
    transform: translate(-10px, -10px) scale(1.03);
    transition: transform 300ms ease-in-out;
  }
`;

export const CertificateImg = styled("img")`
  width: 100%;
  height: ${({ modal }) => (modal ? "100%" : "auto")};
  border-radius: ${({ modal }) => (modal ? "10px" : "0px")};
  object-fit: ${({ modal }) => (modal ? "fill" : "cover")};
  object-position: center;
`;

export const InfoWrapper = styled("div")`
  background: #000;
  padding: 20px 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
`;

export const InfoText = styled("div")`
  font-size: 14px;
  font-weight: bold;
  padding: 3px 0;
`;

export const InfoLink = styled("span")`
  display: flex;
`;

export const InfoTitle = styled("span")`
  display: block;
  font-size: 17px;
  font-weight: bold;
  color: #ec6b20;
  line-height: 23px;
  margin-bottom: 5px;
`;

export const CertificationModal = styled("div")`
  position: fixed;
  display: flex;
  width: 100%;
  height: 100%;

  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  bottom: ${({ toggle }) => (toggle ? "0" : "-100%")};

  background-color: #07080f;
  transition: all 800ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const CertificateWrapper = styled("div")`
  position: relative;
  box-shadow: 8px 8px 0px #f8cbb0, -8px -8px 0px #f8cbb0;
  width: 85%;
  max-width: 1050px;
  margin: auto;
  height: 85%;
  border-radius: 10px;

  @media ${(props) => props.theme.breakpoints.md} {
    position: static;
    height: initial;
  }
`;

export const CloseIcon = styled("span")`
  display: inline-block;
  transition: transform 300ms ease-in-out;
  transition: visibility 250ms ease-out;
  position: absolute;
  cursor: pointer;
  top: -30px;
  right: -40px;
  z-index: 99999;
  visibility: ${({ toggle }) => (toggle ? "visible" : "hidden")};

  &:hover {
    transform: scale(1.2);
  }

  @media ${(props) => props.theme.breakpoints.md} {
    top: 20px;
    right: 20px;
    height: initial;
  }
`;
