import React, { useRef } from 'react';
import { useScroll, useTransform, useSpring } from 'framer-motion';
import { Mail, Download, ArrowDown, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/BrandIcons';
import { Bio, heroStats } from '../../data/constants';
import HeroImg from '../../images/HeroImage.jpg';
import {
    HeroContainer, BackgroundDecor, Aurora1, Aurora2, Aurora3, HeroInner, HeroLeft, HeroRight,
    Badge, Headline, SubtitleLine, Description, CTARow, PrimaryButton, SecondaryButton,
    SocialRow, SocialIconButton, StatsRow, StatBlock, StatValue, StatLabel,
    ImageWrapper, ProfileImage, HireBadge, GreenDot, ScrollCue
} from './HeroStyle';

const HeroSection = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start'],
    });

    // Apply soft spring physics for a more pronounced elastic drift/lag
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 35,
        damping: 20,
        restDelta: 0.001
    });

    // Boosted foreground translations UPWARD
    const imageY = useTransform(smoothProgress, [0, 1], [0, -300]);
    const textY = useTransform(smoothProgress, [0, 1], [0, -140]);

    // Boosted background translations DOWNWARD
    const aurora1Y = useTransform(smoothProgress, [0, 1], [0, 180]);
    const aurora2Y = useTransform(smoothProgress, [0, 1], [0, 150]);
    const aurora3Y = useTransform(smoothProgress, [0, 1], [0, 100]);

    return (
        <HeroContainer id="home" ref={containerRef}>
            <BackgroundDecor>
                <Aurora1 style={{ y: aurora1Y }} />
                <Aurora2 style={{ y: aurora2Y }} />
                <Aurora3 style={{ y: aurora3Y }} />
            </BackgroundDecor>

            <HeroInner>
                <HeroLeft style={{ y: textY }}>
                    <Badge>
                        <Sparkles size={16} />
                        Available for Work
                    </Badge>

                    <Headline>
                        <span className="muted">Hello, I'm</span>
                        <span>{Bio.name}</span>
                    </Headline>

                    <SubtitleLine>
                        {Bio.roles[0]} crafting digital experiences with <b>{heroStats[1]?.value} years</b> of expertise
                    </SubtitleLine>

                    <Description>{Bio.description}</Description>

                    <CTARow>
                        <PrimaryButton
                            href={Bio.resume}
                            target="_blank"
                            rel="noreferrer"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            <Download size={18} />
                            Download Resume
                        </PrimaryButton>
                        <SecondaryButton
                            href="#projects"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            View My Work
                        </SecondaryButton>
                    </CTARow>

                    <SocialRow>
                        <SocialIconButton href={Bio.github} target="_blank" rel="noreferrer" whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
                            <GithubIcon size={18} />
                        </SocialIconButton>
                        <SocialIconButton href={Bio.linkedin} target="_blank" rel="noreferrer" whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
                            <LinkedinIcon size={18} />
                        </SocialIconButton>
                        <SocialIconButton href={`mailto:${Bio.email}`} whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
                            <Mail size={18} />
                        </SocialIconButton>
                    </SocialRow>

                    <StatsRow>
                        {heroStats.map((stat) => (
                            <StatBlock key={stat.label}>
                                <StatValue>{stat.value}</StatValue>
                                <StatLabel>{stat.label}</StatLabel>
                            </StatBlock>
                        ))}
                    </StatsRow>
                </HeroLeft>

                <HeroRight style={{ y: imageY }}>
                    <ImageWrapper>
                        <ProfileImage src={HeroImg} alt={Bio.name} />
                        <HireBadge>
                            <GreenDot />
                            Open to Opportunities
                        </HireBadge>
                    </ImageWrapper>
                </HeroRight>
            </HeroInner>

            <ScrollCue>
                Scroll to explore
                <ArrowDown size={18} />
            </ScrollCue>
        </HeroContainer>
    );
};

export default HeroSection;
