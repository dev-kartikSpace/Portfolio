import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin } from 'lucide-react'
import Pill from '../common/Pill'

const TimelineItem = styled.div`
    position: relative;
    padding-left: 48px;
    width: 100%;

    /* Timeline line */
    &::before {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 18px;
        width: 2px;
        background: ${({ theme }) => theme.card_border};
    }

    &:hover .timeline-node {
        background: rgba(133, 76, 230, 1);
        box-shadow: 0 0 10px rgba(133, 76, 230, 0.8);
        border-color: rgba(133, 76, 230, 0.5);
    }

    @media only screen and (max-width: 640px) {
        padding-left: 36px;
        &::before {
            left: 12px;
        }
    }
`;

const TimelineNode = styled.div`
    position: absolute;
    left: 14px;
    top: 36px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: ${({ theme }) => theme.card_border};
    border: 2px solid ${({ theme }) => theme.bg};
    z-index: 2;
    transition: all 0.3s ease-in-out;

    @media only screen and (max-width: 640px) {
        left: 8px;
    }
`;

const Card = styled(motion.div)`
    width: 100%;
    border: 1px solid ${({ theme }) => theme.card_border};
    border-radius: 16px;
    padding: 28px;
    background: ${({ theme }) => theme.card};
    display: flex;
    flex-direction: column;
    gap: 16px;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        border-color: rgba(133, 76, 230, 0.35);
        box-shadow: 0 0 20px rgba(133, 76, 230, 0.1);
    }

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
        <TimelineItem>
            <TimelineNode className="timeline-node" />
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
        </TimelineItem>
    )
}

export default ExperienceCard
