import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello, <br />
        My name is Shawn Ruby and welcome to my portfolio.
      </SectionTitle>
      <SectionText>
        I am a college graduate with a Bachelor's of Science degree in Computer Science. 
        I have a variety of front-end and back-end projects. I have a proven
        ability to learn new skills and tasks.
      </SectionText>
      <Button onClick={() => (window.location = "#about")}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
