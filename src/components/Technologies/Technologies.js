import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
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
  ListParagraph,
  ListContainer,
} from "./Technologies.styled";

function Technologies() {
  return (
    <Section id="tech">
      <SectionDivider divider />
      <SectionTitle>Technologies</SectionTitle>
      <SectionText>
        I have been working with JavaScript and it ecosystem for the past two
        years
      </SectionText>

      <List>
        <ListItem>
          <DiFirebase size="3rem" />
          <ListContainer>
            <ListTitle>Front-End</ListTitle>
            <ListParagraph>experience with React</ListParagraph>
          </ListContainer>
        </ListItem>

        <ListItem>
          <DiFirebase size="3rem" />
          <ListContainer>
            <ListTitle>Front-End</ListTitle>
            <ListParagraph>experience with React</ListParagraph>
          </ListContainer>
        </ListItem>

        <ListItem>
          <DiFirebase size="3rem" />
          <ListContainer>
            <ListTitle>Front-End</ListTitle>
            <ListParagraph>experience with React</ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
    </Section>
  );
}

export default Technologies;
