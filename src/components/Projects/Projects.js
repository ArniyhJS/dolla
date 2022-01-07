import React from "react";

import { projects } from "constants/constants";
import { Section, SectionDivider, SectionTitle } from "styles/GlobalComponents";
import {
  Hr,
  Tag,
  Img,
  CardInfo,
  TagList,
  BlogCard,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  TitleContent,
  UtilityList,
} from "./Projects.styled";

function Projects() {
  return (
    <Section nopadding id="projects">
      Projects
      <SectionTitle main>Projects</SectionTitle>
      <GridContainer></GridContainer>
    </Section>
  );
}

export default Projects;
