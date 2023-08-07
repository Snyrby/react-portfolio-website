import React, { useState } from "react";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import getProjects from "../../../actions/getProjects";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  const fetchData = async () => {
    const projectData = await getProjects();
    setProjects(projectData);
  };

  fetchData();
  return (
    <Section nopadding id="projects">
      <SectionDivider />
      <SectionTitle main>Projects</SectionTitle>
      <GridContainer>
        {projects.map(
          ({ id, image, title, description, tags, liveUrl, githubUrl }) => (
            <BlogCard key={id}>
              <Img src={image} />
              <TitleContent>
                <HeaderThree title>{title}</HeaderThree>
                <Hr />
              </TitleContent>
              <CardInfo>{description}</CardInfo>
              <div>
                <TitleContent>Stack</TitleContent>
                <TagList>
                  {tags.map((tag, i) => {
                    if (i === tags.length - 1) {
                      return <Tag key={i}>{tag.label}</Tag>;
                    } else {
                      return <Tag key={i}>{tag.label},</Tag>;
                    }
                  })}
                </TagList>
              </div>
              <UtilityList>
                <ExternalLinks href={githubUrl}>Code</ExternalLinks>
                {liveUrl !== "" ? (
                  <ExternalLinks href={liveUrl}>Live</ExternalLinks>
                ) : null}
              </UtilityList>
            </BlogCard>
          )
        )}
      </GridContainer>
    </Section>
  );
};

export default Projects;
