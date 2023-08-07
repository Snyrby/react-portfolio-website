import React, { useState } from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";
import getHeading from "../../../actions/getHeading";

const Hero = () => {
  const [heading, setHeading] = useState([]);

  const fetchData = async () => {
    const headingData = await getHeading();
    setHeading(headingData[0]);
  };

  fetchData();

  return (
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello, <br />
          {heading.title}
        </SectionTitle>
        <SectionText>{heading.intro}</SectionText>
        <Button onClick={() => (window.location = "#about")}>Learn More</Button>
      </LeftSection>
    </Section>
  );
};

export default Hero;
