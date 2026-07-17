import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin } from 'lucide-react'
import Pill from '../common/Pill'

const Card = styled(motion.div)`
    width: 100%;
    max-width: 900px;
    border: 1px solid ${({ theme }) => theme.card_border};
    border-radius: 16px;
    padding: 28px;
    background: ${({ theme }) => theme.card};
    display: flex;
    flex-direction: column;
    gap: 16px;

    @media only screen and (max-width: 768px) {
        padding: 20px;
    }
`

const TopRow = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 16px;
    flex-wrap: wrap;
`

const LeftBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`

const RoleRow = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 18px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
`

const Company = styled.div`
    font-size: 14px;
    color: ${({ theme }) => theme.text_secondary};
`

const RightBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 6px;

    @media only screen and (max-width: 768px) {
        align-items: flex-start;
    }
`

const MetaRow = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 13px;
    color: ${({ theme }) => theme.text_secondary};
`

const Description = styled.p`
    font-size: 15px;
    line-height: 1.6;
    color: ${({ theme }) => theme.text_secondary};
    margin: 0;
`

const TagRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`

const ExperienceCard = ({ experience }) => {
    return (
        <Card whileHover={{ y: -2 }}>
            <TopRow>
                <LeftBlock>
                    <RoleRow>
                        <Briefcase size={18} />
                        {experience.role}
                    </RoleRow>
                    <Company>{experience.company}</Company>
                </LeftBlock>
                <RightBlock>
                    <MetaRow>
                        <Calendar size={14} />
                        {experience.date}
                    </MetaRow>
                    {experience.location &&
                        <MetaRow>
                            <MapPin size={14} />
                            {experience.location}
                        </MetaRow>
                    }
                </RightBlock>
            </TopRow>
            {experience.desc && <Description>{experience.desc}</Description>}
            {experience.skills &&
                <TagRow>
                    {experience.skills.map((skill) => (
                        <Pill key={skill} variant="outline">{skill}</Pill>
                    ))}
                </TagRow>
            }
        </Card>
    )
}

export default ExperienceCard
