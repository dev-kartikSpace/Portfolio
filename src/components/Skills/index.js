import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Layout, Server, Smartphone, Wrench } from 'lucide-react'
import { skills } from '../../data/constants'
import Reveal from '../common/Reveal'
import Pill from '../common/Pill'

const categoryIcons = {
  Frontend: Layout,
  Backend: Server,
  Android: Smartphone,
  Others: Wrench,
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 24px;

  @media (max-width: 768px) {
    padding: 56px 16px;
  }
`

const Wrapper = styled.div`
  width: 100%;
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`

const Title = styled.h2`
  font-size: 36px;
  font-weight: 700;
  text-align: center;
  color: ${({ theme }) => theme.text_primary};
  margin: 0;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`

const Desc = styled.p`
  font-size: 16px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  margin: 0 0 24px 0;
`

const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`

const Card = styled(motion.div)`
  border: 1px solid ${({ theme }) => theme.card_border};
  border-radius: 16px;
  padding: 24px;
  background: ${({ theme }) => theme.card};
`

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${({ theme }) => theme.text_primary};
  font-size: 17px;
  font-weight: 600;
  margin-bottom: 16px;
`

const PillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`

const Skills = () => {
  return (
    <Container id="skills">
      <Wrapper>
        <Reveal>
          <Title>Technical Skills</Title>
          <Desc>Here are some of the technologies and tools I've been working with.</Desc>
        </Reveal>
        <Grid>
          {skills.map((category, index) => {
            const Icon = categoryIcons[category.title] || Wrench
            return (
              <Reveal key={category.title} delay={index * 0.08}>
                <Card whileHover={{ y: -4 }}>
                  <CardHeader>
                    <Icon size={20} />
                    {category.title}
                  </CardHeader>
                  <PillList>
                    {category.skills.map((item) => (
                      <Pill key={item.name} variant="filled">{item.name}</Pill>
                    ))}
                  </PillList>
                </Card>
              </Reveal>
            )
          })}
        </Grid>
      </Wrapper>
    </Container>
  )
}

export default Skills
