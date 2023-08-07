import React, { useState } from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

import getAccomplishments from "../../../actions/getAccomplishments";

const Acomplishments = () => {
  const [accomplishments, setAccomplishments] = useState([]);
  const fetchData = async () => {
    const accomplishmentData = await getAccomplishments();
    setAccomplishments(accomplishmentData[0]);
  };

  fetchData();
  return (
    <Section>
      <SectionTitle>Personal Accomplishments</SectionTitle>
      <Boxes>
        <Box key={accomplishments.id}>
          <BoxNum>
            {accomplishments.totalProjects}
            {accomplishments.totalProjects % 10 === 0 ? "+" : null}
          </BoxNum>
          <BoxText>Open Source Projects</BoxText>
        </Box>
        <Box key={accomplishments.id + 1}>
          <BoxNum>
            {accomplishments.liveProjects}
            {accomplishments.liveProjects % 10 === 0 ? "+" : null}
          </BoxNum>
          <BoxText>Live Projects</BoxText>
        </Box>
        <Box key={accomplishments.id + 2}>
          <BoxNum>2</BoxNum>
          <BoxText>College Degrees</BoxText>
        </Box>
      </Boxes>
    </Section>
  );
};

export default Acomplishments;
