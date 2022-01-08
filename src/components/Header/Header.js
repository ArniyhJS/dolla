import Link from "next/link";
import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  SocialIconsContainer,
  NavLink,
  SocialIcons,
  Span,
} from "./Header.styled";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
          }}
        >
          <DiCssdeck size="3rem" />
          <Span>Portfolio</Span>
        </a>
      </Link>
    </Div1>

    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Project</NavLink>
        </Link>
      </li>

      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>

      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>

    <SocialIconsContainer>
      <SocialIcons href="https://github.com/arniyhjs">
        <AiFillGithub size="3rem" />
      </SocialIcons>

      <SocialIcons href="https://linkedin.com/arniyhjs">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>

      <SocialIcons href="https://twitter.com/arniyhjs">
        <AiFillTwitterCircle size="3rem" />
      </SocialIcons>
    </SocialIconsContainer>
  </Container>
);

export default Header;
