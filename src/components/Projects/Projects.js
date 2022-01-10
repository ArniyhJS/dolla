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
  StackContainer,
} from "./Projects.styled";

function Projects() {
  return (
    <Section nopadding id="projects">
      <SectionDivider divider />
      <SectionTitle>Projects</SectionTitle>
      <GridContainer>
        {projects.map(
          ({ id, image, title, description, source, tags, visit }, index) => (
            <BlogCard key={id}>
              <Img src={image} />
              <TitleContent>
                <HeaderThree title>{title}</HeaderThree>
                <Hr />
              </TitleContent>
              <CardInfo>{description}</CardInfo>

              <StackContainer>
                <TitleContent>Stack</TitleContent>
                <TagList>
                  {tags.map((tag, index) => (
                    <Tag key={index}>{tag}</Tag>
                  ))}
                </TagList>
              </StackContainer>

              <UtilityList>
                <ExternalLinks href={visit}>Code</ExternalLinks>
                <ExternalLinks href={source}>Source</ExternalLinks>
              </UtilityList>
            </BlogCard>
          )
        )}
      </GridContainer>
    </Section>
  );
}

export default Projects;
