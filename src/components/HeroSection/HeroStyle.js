import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

const pulse = keyframes`
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; }
`;

const bounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(8px); }
`;

export const HeroContainer = styled.section`
  position: relative;
  min-height: calc(100vh - 72px);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 40px 24px 80px 24px;
  background: ${({ theme }) => theme.bg};

  @media (max-width: 960px) {
    padding: 32px 16px 64px 16px;
  }
`;

export const BackgroundDecor = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      ${({ theme }) => theme.bg} 0%,
      transparent 15%,
      transparent 80%,
      ${({ theme }) => theme.bg} 100%
    );
  }
`;

const float1 = keyframes`
  0%, 100% { transform: translate(0px, 0px) scale(1) rotate(0deg); }
  33% { transform: translate(40px, -60px) scale(1.15) rotate(120deg); }
  66% { transform: translate(-30px, 30px) scale(0.9) rotate(240deg); }
`;

const float2 = keyframes`
  0%, 100% { transform: translate(0px, 0px) scale(1) rotate(0deg); }
  33% { transform: translate(-50px, 40px) scale(0.9) rotate(-120deg); }
  66% { transform: translate(40px, -30px) scale(1.1) rotate(-240deg); }
`;

const float3 = keyframes`
  0%, 100% { transform: translate(0px, 0px) scale(1) rotate(0deg); }
  50% { transform: translate(30px, -50px) scale(1.05) rotate(180deg); }
`;

export const AuroraBlob = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  filter: blur(140px);
  pointer-events: none;
`;

export const Aurora1 = styled(AuroraBlob)`
  width: 450px;
  height: 450px;
  background: ${({ theme }) => theme.aurora_1};
  top: -10%;
  left: -5%;
  animation: ${float1} 25s ease-in-out infinite;
`;

export const Aurora2 = styled(AuroraBlob)`
  width: 500px;
  height: 500px;
  background: ${({ theme }) => theme.aurora_2};
  bottom: -15%;
  right: -5%;
  animation: ${float2} 30s ease-in-out infinite;
`;

export const Aurora3 = styled(AuroraBlob)`
  width: 350px;
  height: 350px;
  background: ${({ theme }) => theme.aurora_3};
  top: 30%;
  left: 25%;
  animation: ${float3} 20s ease-in-out infinite;
`;


export const HeroInner = styled(motion.div)`
  position: relative;
  top: -30px;
  z-index: 1;
  width: 100%;
  max-width: 1200px;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 60px;
  align-items: center;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
    top: -20px;
  }
`;

export const HeroLeft = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 22px;

  @media (max-width: 960px) {
    align-items: center;
    order: 2;
  }
`;

export const HeroRight = styled(motion.div)`
  display: flex;
  justify-content: center;

  @media (max-width: 960px) {
    order: 1;
  }
`;

export const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  width: fit-content;
  padding: 8px 18px;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.card_border};
  background: ${({ theme }) => theme.card_light};
  color: ${({ theme }) => theme.text_secondary};
  font-size: 13px;
  font-weight: 500;
`;

export const Headline = styled.h1`
  font-weight: 700;
  font-size: clamp(36px, 5vw, 64px);
  line-height: 1.1;
  color: ${({ theme }) => theme.text_primary};
  margin: 0;

  span {
    display: block;
  }

  .muted {
    color: ${({ theme }) => theme.text_secondary};
    font-weight: 500;
  }
`;

export const SubtitleLine = styled.p`
  font-size: 20px;
  line-height: 1.5;
  color: ${({ theme }) => theme.text_secondary};
  max-width: 560px;
  margin: 0;

  b {
    color: ${({ theme }) => theme.text_primary};
  }

  @media (max-width: 960px) {
    max-width: 100%;
  }
`;

export const Description = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: ${({ theme }) => theme.text_secondary};
  max-width: 520px;
  margin: 0;

  @media (max-width: 960px) {
    max-width: 100%;
  }
`;

export const CTARow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  @media (max-width: 960px) {
    justify-content: center;
  }
`;

export const PrimaryButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 24px;
  border-radius: 12px;
  background: ${({ theme }) => theme.button};
  color: ${({ theme }) => theme.button_text};
  font-weight: 600;
  font-size: 15px;
  text-decoration: none;
  cursor: pointer;
`;

export const SecondaryButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 24px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.card_border};
  background: transparent;
  color: ${({ theme }) => theme.text_primary};
  font-weight: 600;
  font-size: 15px;
  text-decoration: none;
  cursor: pointer;
`;

export const SocialRow = styled.div`
  display: flex;
  gap: 12px;

  @media (max-width: 960px) {
    justify-content: center;
  }
`;

export const SocialIconButton = styled(motion.a)`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.card_border};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.text_primary};
  cursor: pointer;
`;

export const StatsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 40px;
  padding-top: 12px;

  @media (max-width: 960px) {
    justify-content: center;
    gap: 32px;
  }
`;

export const StatBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StatValue = styled.div`
  font-size: 28px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
`;

export const StatLabel = styled.div`
  font-size: 13px;
  color: ${({ theme }) => theme.text_secondary};
`;

export const ImageWrapper = styled(motion.div)`
  position: relative;
`;

export const ProfileImage = styled.img`
  width: 320px;
  height: 320px;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid ${({ theme }) => theme.card_border};

  @media (max-width: 640px) {
    width: 240px;
    height: 240px;
  }
`;

export const HireBadge = styled.div`
  position: absolute;
  bottom: 12px;
  right: -12px;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 18px;
  border-radius: 16px;
  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.card_border};
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  font-size: 13px;
  color: ${({ theme }) => theme.text_primary};

  @media (max-width: 640px) {
    right: 0;
    padding: 10px 14px;
  }
`;

export const GreenDot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({ theme }) => theme.success};
  animation: ${pulse} 2s ease-in-out infinite;
`;

export const ScrollCue = styled.div`
  position: absolute;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.text_secondary};
  font-size: 13px;
  z-index: 1;

  svg {
    animation: ${bounce} 1.6s ease-in-out infinite;
  }

  @media (max-width: 640px) {
    display: none;
  }
`;
