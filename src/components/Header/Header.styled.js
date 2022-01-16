import styled from "styled-components";
import { IoIosArrowDropdown } from "react-icons/io";
import { Link } from "react-scroll";

export const Container = styled.div`
  background: ${({ scrollNav }) => (scrollNav ? "#07080F" : "transparent")};
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  position: sticky;
  height: 80px;
  margin-top: -80px;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 100;

  @media ${(props) => props.theme.breakpoints.md} {
    /* position: static; */
    margin-top: 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
  }
`;

export const Span = styled.div`
  padding-left: 5px;
  font-weight: bold;
  font-size: 30px;

  @media ${(props) => props.theme.breakpoints.md} {
    padding-left: 3px;
    font-size: 20px;
  }
`;

export const LogoImg = styled.img`
  /* width: 100%; */
  width: 100%;
  height: auto;

  @media ${(props) => props.theme.breakpoints.md} {
    display: none;
  }
`;

export const Div1 = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  flex-direction: row;
  margin-top: 3px;

  @media ${(props) => props.theme.breakpoints.sm} {
  }
`;

export const Div2 = styled.div`
  grid-area: 1 / 2 / 2 / 6;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media ${(props) => props.theme.breakpoints.md} {
    display: none;
    grid-area: 2 / 2 / 3 / 5;
  }
`;

export const SocialIconsContainer = styled.div`
  grid-area: 1 / 6 / 2 / -1;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media ${(props) => props.theme.breakpoints.md} {
    align-items: center;
    display: none;
    grid-area: 1 / 4 / 2 / 6;
  }
`;

//Navigation Item
export const NavItem = styled.li`
  // height: 100%;
`;

// Navigation Links
export const NavLink = styled(Link)`
  font-size: 2rem;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  transition: 0.4s ease;
  text-decoration: none;
  height: 100%;
  display: flex;
  align-items: center;
  padding-bottom: 2px;
  transition: all 300ms ease-in-out;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;

  &:hover {
    color: #fff;
    opacity: 1;
    cursor: pointer;
    transition: all 300ms ease-in-out;
  }

  &.active {
    border-bottom: 10px solid #ec6b20;
    transition: all 300ms ease-in-out;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0.5rem;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
    border-bottom: 7px solid transparent;

    &.active {
      border-bottom: 8px solid #ec6b20;
    }
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem;
  }
`;

/// DropDown Contact
export const ContactDropDown = styled.button`
  border: none;
  display: flex;
  position: relative;
  background: none;
  font-size: 1.7rem;

  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  cursor: pointer;
  transition: 0.3s ease;

  &:focus {
    outline: none;
  }
  &:hover {
    color: #fff;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.4rem 0;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0;
  }
`;

export const NavProductsIcon = styled(IoIosArrowDropdown)`
  margin-left: 8px;
  display: flex;
  align-self: center;
  transition: 0.3s ease;
  opacity: ${({ isOpen }) => (isOpen ? "1" : ".75")};
  transform: ${({ isOpen }) => (isOpen ? "scaleY(-1)" : "scaleY(1)")};

  &:hover {
    opacity: 1;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 2px 0 0 2px;
    width: 15px;
  }
`;

// Social Icons
export const SocialIcons = styled.a`
  transition: 0.3s ease;
  color: white;
  border-radius: 50px;
  padding: 8px;

  &:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
  }
`;

//Menu HandBurger
export const MenuBar = styled.div`
  display: none;

  &:hover {
    cursor: pointer;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    display: block;
    cursor: pointer;
  }
`;

//close button
export const CloseButton = styled.span`
  position: absolute;
  display: inline-block;
  margin-left: auto;
  right: 20px;
  top: 20px;
`;

export const MobileContainer = styled.div`
  display: none;
  top: ${({ toggle }) => (toggle ? "0" : "-100vh")};

  transition: all 500ms ease-in-out;

  @media ${(props) => props.theme.breakpoints.md} {
    display: flex;
    position: fixed;
    flex-direction: column;

    left: 0;
    right: 0;
    bottom: 0;
    height: 100vh;
    width: 100%;
    overflow: clip;
    background: #07080f;
    z-index: 999;

    transition: all 500ms ease-in-out;
  }
`;

export const NavWrapper = styled.div`
  width: 80%;
  display: flex;
  margin: auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60%;
`;

export const MobileSocialIconsContainer = styled.div`
  display: flex;
  justify-content: center;
`;
