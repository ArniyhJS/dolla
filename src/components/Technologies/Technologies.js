import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import { VscSymbolStructure } from "react-icons/vsc";
import { GoVersions } from "react-icons/go";
import { SiTailwindcss, SiRedux } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import {
  Section,
  SectionText,
  SectionTitle,
  SectionDivider,
} from "styles/GlobalComponents";

import {
  List,
  ListItem,
  ListTitle,
  IconWrapper,
  ListParagraph,
  ListContainer,
  HighLight,
} from "./Technologies.styled";

function Technologies() {
  return (
    <Section id="tech">
      <SectionDivider divider />
      <SectionTitle>Technologies</SectionTitle>
      <SectionText>
        I have been working with JavaScript and it ecosystem for close to 3
        years now and I have come to appreciate frontend even more. I build both
        Monolithic and Micro-Frontend web applications.
      </SectionText>

      <List>
        <ListItem>
          <IconWrapper>
            <VscSymbolStructure size="4rem" />
          </IconWrapper>

          <ListContainer>
            <ListTitle>Structure</ListTitle>
            <ListParagraph>
              Experience with <HighLight>HTML </HighLight>
              and
              <HighLight> JSX </HighLight>
            </ListParagraph>
          </ListContainer>
        </ListItem>

        <ListItem>
          <IconWrapper>
            <SiTailwindcss size="4rem" />
          </IconWrapper>

          <ListContainer>
            <ListTitle>Styling</ListTitle>
            <ListParagraph>
              Experience with <HighLight> CSS</HighLight>,
              <HighLight> SASS</HighLight>,
              <br /> <HighLight> MUI</HighLight> ,
              <HighLight> TailwindCSS</HighLight>,
              <HighLight> Bootstrap </HighLight> and{" "}
              <HighLight> Styled-Components </HighLight>
            </ListParagraph>
          </ListContainer>
        </ListItem>

        <ListItem>
          <IconWrapper>
            <FaReact size="4rem" />
          </IconWrapper>

          <ListContainer>
            <ListTitle>Framework</ListTitle>
            <ListParagraph>
              Experience with <HighLight> JavaScript</HighLight>,
              <HighLight> Jquery</HighLight>, <HighLight> React</HighLight> and
              <HighLight> Next</HighLight>
            </ListParagraph>
          </ListContainer>
        </ListItem>

        <ListItem>
          <IconWrapper>
            <SiRedux size="4rem" />
          </IconWrapper>

          <ListContainer>
            <ListTitle>State Management</ListTitle>
            <ListParagraph>
              Experience with <HighLight>Redux</HighLight> <br /> and
              <HighLight> React-Query</HighLight>
            </ListParagraph>
          </ListContainer>
        </ListItem>

        <ListItem>
          <IconWrapper>
            <GoVersions size="4rem" />
          </IconWrapper>

          <ListContainer>
            <ListTitle>CI/CD</ListTitle>
            <ListParagraph>
              Experience with <HighLight>Git</HighLight> ,{" "}
              <HighLight>Github</HighLight>, <br />{" "}
              <HighLight>Control-Panel </HighLight> ,{" "}
              <HighLight>Heroku</HighLight> and <HighLight>Netlify</HighLight>
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
    </Section>
  );
}

export default Technologies;
