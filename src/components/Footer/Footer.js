import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";

import { HiOutlineMail } from "react-icons/hi";
import { IoIosPhonePortrait } from "react-icons/io";

import { SocialIcons } from "../Header/Header.styled";
import {
  Slogan,
  LinkItem,
  LinkList,
  LinkTitle,
  LinkColumn,
  FooterWrapper,
  SocialContainer,
  CompanyContainer,
  SocialIconsContainer,
} from "./Footer.styled";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+2348185989862">
            <IoIosPhonePortrait size="3rem" />
            +2348185989862
          </LinkItem>
        </LinkColumn>

        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:aniebietebebe1@gmail.com">
            <HiOutlineMail size="3rem" /> &nbsp; aniebietebebe1@gmail.com
          </LinkItem>
        </LinkColumn>

        <SocialIconsContainer>
          {/* <CompanyContainer>
            <Slogan>Make a difference</Slogan>
          </CompanyContainer> */}

          <SocialContainer>
            <SocialIcons href="https://github.com/arniyhjs">
              <AiFillGithub size="3rem" />
            </SocialIcons>

            <SocialIcons href="https://linkedin.com/arniyhjs">
              <AiFillLinkedin size="3rem" />
            </SocialIcons>

            <SocialIcons href="https://twitter.com/arniyhjs">
              <AiFillTwitterCircle size="3rem" />
            </SocialIcons>
          </SocialContainer>
        </SocialIconsContainer>
      </LinkList>
    </FooterWrapper>
  );
};

export default Footer;
