import React from "react";

import { SectionText, SectionTitle } from "styles/GlobalComponents";
import Button from "styles/GlobalComponents/Button";
import { LeftSection, HeroSection } from "./Hero.styled";

const Hero = (props) => (
  <HeroSection row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Aniebiet Ebebe <b /> personal portfolio
      </SectionTitle>
      <SectionText>
        value proposition: what you are proposing to your employer and it should
        stand out
      </SectionText>
      <Button onClick={() => (window.location = "https://google.com")}>
        What to know me?
      </Button>
    </LeftSection>
  </HeroSection>
);

export default Hero;
