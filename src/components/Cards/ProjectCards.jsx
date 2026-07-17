import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { GithubIcon } from '../common/BrandIcons'
import Pill from '../common/Pill'

const Card = styled(motion.div)`
    width: 100%;
    border: 1px solid ${({ theme }) => theme.card_border};
    border-radius: 16px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    background: ${({ theme }) => theme.card};
`

const Image = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
`

const Body = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 20px;
    flex: 1;
`

const Title = styled.div`
    font-size: 18px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`

const Description = styled.div`
    font-size: 14px;
    line-height: 1.5;
    color: ${({ theme }) => theme.text_secondary};
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
`

const Tags = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`

const ButtonRow = styled.div`
    display: flex;
    gap: 10px;
    margin-top: auto;
    padding-top: 4px;
`

const CodeButton = styled.a`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 8px 14px;
    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme.card_border};
    color: ${({ theme }) => theme.text_primary};
    font-size: 13px;
    font-weight: 500;
    text-decoration: none;
`

const DemoButton = styled.a`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 8px 14px;
    border-radius: 10px;
    background: ${({ theme }) => theme.button};
    color: ${({ theme }) => theme.button_text};
    font-size: 13px;
    font-weight: 500;
    text-decoration: none;
`

const ProjectCards = ({ project }) => {
    return (
        <Card whileHover={{ y: -6 }}>
            <Image src={project.image} alt={project.title} />
            <Body>
                <Title>{project.title}</Title>
                <Description>{project.description}</Description>
                <Tags>
                    {project.tags?.map((tag) => (
                        <Pill key={tag} variant="filled">{tag}</Pill>
                    ))}
                </Tags>
                <ButtonRow>
                    {project.github &&
                        <CodeButton href={project.github} target="_blank" rel="noreferrer">
                            <GithubIcon size={16} />
                            Code
                        </CodeButton>
                    }
                    {project.webapp &&
                        <DemoButton href={project.webapp} target="_blank" rel="noreferrer">
                            <ExternalLink size={16} />
                            Demo
                        </DemoButton>
                    }
                </ButtonRow>
            </Body>
        </Card>
    )
}

export default ProjectCards
