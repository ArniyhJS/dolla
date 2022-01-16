import React from "react";

import { SectionText, SectionTitle } from "styles/GlobalComponents";
import Button from "styles/GlobalComponents/Button";
import {
  LeftSection,
  HeroSection,
  ProfileName,
  HeroSectionTitle,
} from "./Hero.styled";

const Hero = (props) => (
  <HeroSection row nopadding>
    <LeftSection>
      <HeroSectionTitle main center>
        Hey there, <br /> I'm <ProfileName>Aniebiet Ebebe</ProfileName>
        <br />
        and I do everything Frontend
      </HeroSectionTitle>
      <SectionText>
        If softwares could be craftly done with user experience as it primary
        focus then you are not just creating solutions but building relationship
      </SectionText>
      <Button onClick={() => (window.location = "#experience")}>
        My Experience
      </Button>
    </LeftSection>
  </HeroSection>
);

export default Hero;
