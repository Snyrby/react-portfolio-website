import React from "react";
import {
  DiPython,
  DiReact,
  DiCss3,
  DiNodejs,
  DiMongodb,
  DiHtml5,
  DiDjango,
  DiMysql,
} from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
  TechIcon,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Tecnologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in back-end and front-end
      development.
    </SectionText>
    <List>
      <ListItem>
        <TechIcon>
          <DiReact size="3rem" />
          <DiHtml5 size="3rem" />
          <DiCss3 size="3rem" />
        </TechIcon>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with: <br />
            React.js, HTML5, CSS3, Javascript
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <TechIcon>
          <DiNodejs size="3rem" />
          <DiDjango size="3rem" />
          <DiPython size="3rem" />
        </TechIcon>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with: <br />
            Node.js, Express.js, Django, Python
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <TechIcon>
          <DiMongodb size="3rem" />
          <DiMysql size="3rem" />
        </TechIcon>
        <ListContainer>
          <ListTitle>Databases</ListTitle>
          <ListParagraph>
            Experience with: <br />
            MongoDB, SQL 
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
