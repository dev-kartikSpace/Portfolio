import React from 'react'
import styled from 'styled-components'
import { education } from '../../data/constants';
import EducationCard from '../Cards/EducationCard';
import Reveal from '../common/Reveal';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px 24px;

    @media (max-width: 768px) {
        padding: 56px 16px;
    }
`;

const Wrapper = styled.div`
    width: 100%;
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
`;

const Title = styled.h2`
    font-size: 36px;
    font-weight: 700;
    text-align: center;
    color: ${({ theme }) => theme.text_primary};
    margin: 0;

    @media (max-width: 768px) {
        font-size: 28px;
    }
`;

const Desc = styled.p`
    font-size: 16px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    margin: 0 0 24px 0;
`;

const CardStack = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;

    & > * {
        width: 100%;
        max-width: 900px;
    }
`;

const Education = () => {
    return (
        <Container id="education">
            <Wrapper>
                <Reveal>
                    <Title>Education</Title>
                    <Desc>
                        My education has been a journey of self-discovery and growth. My educational details are as follows.
                    </Desc>
                </Reveal>
                <CardStack>
                    {education.map((edu, index) => (
                        <Reveal key={edu.id} delay={index * 0.08}>
                            <EducationCard education={edu} />
                        </Reveal>
                    ))}
                </CardStack>
            </Wrapper>
        </Container>
    )
}

export default Education
