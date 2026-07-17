import React, { useRef } from 'react'
import styled from 'styled-components'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import ExperienceCard from '../Cards/ExperienceCard';
import { experiences } from '../../data/constants';
import Reveal from '../common/Reveal';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 150px 24px 100px 24px;
    position: relative;
    overflow: visible;
    z-index: 1;

    @media (max-width: 768px) {
        padding: 100px 16px 60px 16px;
    }
`;

const DarkBackgroundLayer = styled(motion.div)`
    position: absolute;
    top: 0;
    left: 2%;
    right: 2%;
    bottom: 0;
    max-width: 1200px;
    margin: 0 auto;
    background: ${({ theme }) => theme.bg};
    border-radius: 32px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    box-shadow: 0 40px 100px rgba(0, 0, 0, 0.45);
    z-index: 0;
    pointer-events: none;

    @media (max-width: 768px) {
        left: 8px;
        right: 8px;
        border-radius: 20px;
    }
`;

const Wrapper = styled.div`
    position: relative;
    z-index: 1;
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

const Experience = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start']
    });
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 35,
        damping: 20,
        restDelta: 0.001
    });

    // Reverse drift: shift down on entry, slide up on scroll down
    const bgY = useTransform(smoothProgress, [0, 1], [80, -80]);

    return (
        <Container id="experience" ref={containerRef}>
            <DarkBackgroundLayer style={{ y: bgY }} />
            <Wrapper>
                <Reveal>
                    <Title>Professional Experience</Title>
                    <Desc>
                        My work experience as a software engineer, working across different companies and projects.
                    </Desc>
                </Reveal>
                <CardStack>
                    {experiences.map((experience, index) => (
                        <Reveal key={experience.id} delay={index * 0.08}>
                            <ExperienceCard experience={experience} />
                        </Reveal>
                    ))}
                </CardStack>
            </Wrapper>
        </Container>
    )
}

export default Experience
