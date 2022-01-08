import React from "react";

import { accomplishmentData } from "constants/constants";
import { Section, SectionDivider, SectionTitle } from "styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./Acomplishments.styled";

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Accomplishment</SectionTitle>
    <Boxes>
      {accomplishmentData.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
