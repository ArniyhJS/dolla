import React from "react";

import { SectionText, SectionTitle } from "styles/GlobalComponents";
import Button from "styles/GlobalComponents/Button";
import { LeftSection, HeroSection, ProfileName } from "./Hero.styled";

const Hero = (props) => (
  <HeroSection row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hey there, <br /> I'm <ProfileName>Aniebiet Ebebe</ProfileName>
        <br />
        and I do everything Frontend
      </SectionTitle>
      <SectionText>
        value proposition: what you are proposing to your employer and it should
        stand out
      </SectionText>
      <Button onClick={() => (window.location = "https://google.com")}>
        About me
      </Button>
    </LeftSection>
  </HeroSection>
);

export default Hero;
