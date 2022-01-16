import React from "react";
import { IoIosSnow } from "react-icons/io";

import { SectionText, SectionTitle } from "styles/GlobalComponents";
import {
  LeftSection,
  HeroSection,
  ProfileName,
  HeroSectionText,
  HeroSectionTitle,
  HeroButton,
  HeroIcon,
} from "./Hero.styled";

const Hero = (props) => (
  <HeroSection row nopadding>
    <HeroIcon>
      <IoIosSnow size="5rem" />
    </HeroIcon>
    <LeftSection>
      <HeroSectionTitle main center>
        Hey there, <br /> I'm <ProfileName>Aniebiet Ebebe</ProfileName>
        <br />
        and I do everything Frontend
      </HeroSectionTitle>
      <HeroSectionText>
        If softwares could be craftly done with user experience as it primary
        focus then you are not just creating solutions but building relationship
      </HeroSectionText>
      <HeroButton onClick={() => (window.location = "#experience")}>
        My experience
      </HeroButton>
    </LeftSection>
  </HeroSection>
);

export default Hero;
