import React from 'react'
import { projects } from '../../data/constants'
import ProjectCard from '../Cards/ProjectCards'
import Reveal from '../common/Reveal'
import { Grid, Container, Desc, Title, Wrapper } from './ProjectsStyle'

const Projects = () => {
  return (
    <Container id="projects">
      <Wrapper>
        <Reveal>
          <Title>Featured Projects</Title>
          <Desc>
            I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.
          </Desc>
        </Reveal>
        <Grid>
          {projects.map((project, index) => (
            <Reveal key={`${project.id}-${index}`} delay={index * 0.06}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </Grid>
      </Wrapper>
    </Container>
  )
}

export default Projects
