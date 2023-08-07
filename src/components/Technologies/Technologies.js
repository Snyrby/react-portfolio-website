import React, { useState } from "react";
import { DiReact, DiNodejs, DiDatabase } from "react-icons/di";
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
import getTechnologies from "../../../actions/getTechnologies";

const Technologies = () => {
  const [frontEnd, setfrontEnd] = useState([]);
  const [backend, setBackend] = useState([]);
  const [database, setDatabase] = useState([]);

  const fetchData = async () => {
    const technologyData = await getTechnologies();
    const frontEndData = [];
    const backendData = [];
    const databaseData = [];
    technologyData.forEach((technology) => {
      if (technology.category === "Frontend") {
        frontEndData.push(technology);
      } else if (technology.category === "Backend") {
        backendData.push(technology);
      } else if (technology.category === "Database") {
        databaseData.push(technology);
      }
    });
    setfrontEnd(frontEndData);
    setBackend(backendData);
    setDatabase(databaseData);
  };

  fetchData();
  return (
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
          </TechIcon>
          <ListContainer>
            <ListTitle>Front-End</ListTitle>
            <ListParagraph>
              Experience with: <br />
              {frontEnd.map((tag, i) => {
                if (i === frontEnd.length - 1) {
                  return tag.label;
                } else {
                  return tag.label + ", ";
                }
              })}
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <TechIcon>
            <DiNodejs size="3rem" />
          </TechIcon>
          <ListContainer>
            <ListTitle>Back-End</ListTitle>
            <ListParagraph>
              Experience with: <br />
              {backend.map((tag, i) => {
                if (i === backend.length - 1) {
                  return tag.label;
                } else {
                  return tag.label + ", ";
                }
              })}
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <TechIcon>
            <DiDatabase size="3rem" />
          </TechIcon>
          <ListContainer>
            <ListTitle>Databases</ListTitle>
            <ListParagraph>
              Experience with: <br />
              {database.map((tag, i) => {
                if (i === database.length - 1) {
                  return tag.label;
                } else {
                  return tag.label + ", ";
                }
              })}
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
    </Section>
  );
};

export default Technologies;
