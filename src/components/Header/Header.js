import Link from "next/link";
import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";

import { FaBars, FaTimes } from "react-icons/fa";
import { DiCssdeck } from "react-icons/di";

import {
  Div1,
  Div2,
  Span,
  NavItem,
  NavLink,
  LogoImg,
  MenuBar,
  Container,
  NavWrapper,
  CloseButton,
  SocialIcons,
  MobileContainer,
  SocialIconsContainer,
  MobileSocialIconsContainer,
} from "./Header.styled";

import { useHeader } from "./Header.rooks";

const Header = () => {
  const { toggle, scrollNav, handleToggle } = useHeader();
  return (
    <Container scrollNav={scrollNav}>
      <Div1>
        <Link href="/">
          <a
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              color: "#fff",
            }}
          >
            <DiCssdeck size="5rem" />
            <Span>
              AE
              {/* <LogoImg alt="logo" src="/images/download.svg" /> */}
            </Span>
          </a>
        </Link>
      </Div1>

      <Div2>
        <NavItem>
          <NavLink
            to="projects"
            spy={true}
            exact="true"
            offset={-80}
            smooth={true}
            duration={400}
          >
            Project
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            to="tech"
            spy={true}
            exact="true"
            offset={-80}
            smooth={true}
            duration={400}
          >
            Technologies
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            to="experience"
            spy={true}
            exact="true"
            offset={-80}
            smooth={true}
            duration={400}
          >
            Experience
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            to="accomplishments"
            spy={true}
            exact="true"
            offset={-80}
            smooth={true}
            duration={400}
          >
            Accomplishments
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            to="certifications"
            spy={true}
            exact="true"
            offset={-80}
            smooth={true}
            duration={400}
          >
            Certifications
          </NavLink>
        </NavItem>
      </Div2>

      <SocialIconsContainer>
        <SocialIcons href="https://github.com/arniyhjs">
          <AiFillGithub size="3rem" />
        </SocialIcons>

        <SocialIcons href="https://www.linkedin.com/in/arniyh/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>

        <SocialIcons href="https://twitter.com/arniyhjs">
          <AiFillTwitterCircle size="3rem" />
        </SocialIcons>
      </SocialIconsContainer>

      <MobileContainer toggle={toggle}>
        <CloseButton onClick={() => handleToggle()}>
          <FaTimes size="3rem" />
        </CloseButton>

        <NavWrapper>
          <NavItem>
            <NavLink
              to="projects"
              spy={true}
              exact="true"
              offset={-80}
              smooth={true}
              duration={400}
              onClick={handleToggle}
            >
              Project
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink
              to="tech"
              spy={true}
              exact="true"
              offset={-80}
              smooth={true}
              duration={400}
              onClick={handleToggle}
            >
              Technologies
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink
              to="about"
              spy={true}
              exact="true"
              offset={-80}
              smooth={true}
              duration={400}
              onClick={handleToggle}
            >
              About
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink
              to="accomplishments"
              spy={true}
              exact="true"
              offset={-80}
              smooth={true}
              duration={400}
              onClick={handleToggle}
            >
              Accomplishments
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink
              to="certifications"
              spy={true}
              exact="true"
              offset={-80}
              smooth={true}
              duration={400}
              onClick={handleToggle}
            >
              Certifications
            </NavLink>
          </NavItem>
        </NavWrapper>

        <MobileSocialIconsContainer>
          <SocialIcons href="https://github.com/arniyhjs">
            <AiFillGithub size="3rem" />
          </SocialIcons>

          <SocialIcons href="https://linkedin.com/arniyhjs">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>

          <SocialIcons href="https://twitter.com/arniyhjs">
            <AiFillTwitterCircle size="3rem" />
          </SocialIcons>
        </MobileSocialIconsContainer>
      </MobileContainer>

      <MenuBar onClick={() => handleToggle()}>
        <FaBars size="3rem" />
      </MenuBar>
    </Container>
  );
};

export default Header;
