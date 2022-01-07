import React from "react";

import { Section, SectionText, SectionTitle } from "styles/GlobalComponents";
import Button from "styles/GlobalComponents/Button";
import { LeftSection } from "./Hero.styled";

const Hero = (props) => (
  <Section row nopadding>
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
  </Section>
);

export default Hero;
