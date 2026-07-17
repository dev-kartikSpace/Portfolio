import React, { useRef } from 'react'
import styled, { keyframes } from 'styled-components'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { Layout, Server, Smartphone, Wrench } from 'lucide-react'
import { skills } from '../../data/constants'
import Reveal from '../common/Reveal'
import Pill from '../common/Pill'
import { GithubIcon } from '../common/BrandIcons'

const categoryIcons = {
  Frontend: Layout,
  Backend: Server,
  Android: Smartphone,
  Others: Wrench,
}

// Float animations for background icons
const floatSlow = keyframes`
  0%, 100% { transform: translateY(0) rotate(0deg) scale(1); }
  50% { transform: translateY(-20px) rotate(15deg) scale(1.05); }
`;

const floatFast = keyframes`
  0%, 100% { transform: translateY(0) rotate(0deg) scale(1.05); }
  50% { transform: translateY(-15px) rotate(-15deg) scale(0.95); }
`;

// Brand SVGs for the background
const ReactIcon = () => (
  <svg viewBox="-11.5 -10.23 23 20.46" fill="none" stroke="currentColor" strokeWidth="1" width="48" height="48">
    <circle cx="0" cy="0" r="2.05" fill="currentColor"/>
    <ellipse rx="11" ry="4.2"/>
    <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
    <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
  </svg>
);

const NodeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" width="48" height="48">
    <path d="M12 2L4 6.5v9L12 22l8-4.5v-9L12 2z"/>
    <path d="M12 2v20M4 6.5l8 4.5 8-4.5" opacity="0.4"/>
  </svg>
);

const DockerIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="48" height="48">
    <path d="M13.962 7.025h-2.42c-.231 0-.42.189-.42.42v2.42c0 .23.189.42.42.42h2.42c.231 0 .42-.19.42-.42v-2.42c0-.231-.189-.42-.42-.42Zm-2.927 0h-2.42c-.231 0-.42.189-.42.42v2.42c0 .23.189.42.42.42h2.42c.23 0 .42-.19.42-.42v-2.42c0-.231-.19-.42-.42-.42Zm-2.928 0H5.687c-.231 0-.42.189-.42.42v2.42c0 .23.189.42.42.42h2.42c.23 0 .42-.19.42-.42v-2.42c0-.231-.19-.42-.42-.42Zm2.928-2.927h-2.42c-.231 0-.42.189-.42.42v2.42c0 .231.189.42.42.42h2.42c.23 0 .42-.189.42-.42V4.518c0-.23-.19-.42-.42-.42Zm-2.928 0H5.687c-.231 0-.42.189-.42.42v2.42c0 .231.189.42.42.42h2.42c.23 0 .42-.189.42-.42V4.518c0-.23-.19-.42-.42-.42Zm5.855 0h-2.42c-.231 0-.42.189-.42.42v2.42c0 .231.189.42.42.42h2.42c.231 0 .42-.189.42-.42V4.518c0-.23-.189-.42-.42-.42Zm2.927 0h-2.42c-.231 0-.42.189-.42.42v2.42c0 .231.189.42.42.42h2.42c.231 0 .42-.189.42-.42V4.518c0-.23-.189-.42-.42-.42Zm2.928 2.927h-2.42c-.23 0-.42.189-.42.42v2.42c0 .23.19.42.42.42h2.42c.231 0 .42-.19.42-.42v-2.42c0-.231-.189-.42-.42-.42Zm1.906 4.793c-.482-.397-1.114-.54-1.862-.54h-7.148c-.23 0-.42.189-.42.42v2.42c0 .23.19.42.42.42h.274c.05 1.942 1.34 3.754 3.328 4.382 1.258.4 2.617.208 3.655-.472 1.488-.976 2.146-2.583 2.173-4.332h.58c.706 0 1.23-.29 1.58-.696.38-.444.407-1.042.12-1.393-.16-.192-.4-.367-.714-.492a2.032 2.032 0 0 0-1.884.341c.21-.61.168-1.282-.12-1.89a2.052 2.052 0 0 0-1.554-1.218 3.12 3.12 0 0 0 .532-1.127c.18-.75-.02-1.503-.52-2.029-.27-.282-.622-.486-1.026-.583-.075.053-.135.124-.176.208-.432.884-.253 1.942.396 2.639.117.126.248.238.39.336-.341.13-.637.362-.835.688a2.04 2.04 0 0 0-.258 1.439Z"/>
  </svg>
);

const FigmaIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" width="48" height="48">
    <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5zM12 2h3.5a3.5 3.5 0 0 1 0 7H12V2zM12 9h3.5a3.5 3.5 0 0 1 0 7H12V9zM5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5zM8.5 16H12v4.5A3.5 3.5 0 0 1 8.5 17 3.5 3.5 0 0 1 5 13.5c0-1 .8-1.5 3.5-1.5z" />
  </svg>
);

const GitIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" width="48" height="48">
    <circle cx="18" cy="18" r="3"/>
    <circle cx="6" cy="6" r="3"/>
    <circle cx="6" cy="18" r="3"/>
    <path d="M18 15V9a4 4 0 0 0-4-4h-5"/>
    <path d="M11 7l-3-2 3-2"/>
  </svg>
);

const PythonIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="48" height="48">
    <path d="M11.892 0c-1.42 0-2.658.077-3.715.228-2.65.383-3.155 1.554-3.155 3.541v1.942h6.985v.85H1.939C.8 6.561.034 7.424.034 9.176v4.614c0 1.517.925 2.502 2.348 2.569h1.611v-2.27c0-2.31 1.768-4.148 4.22-4.148h4.5v-1.62c0-1.89-.96-3.195-2.73-3.195h-5.91V3.535C4.073 1.954 5.378.85 7.625.85h4.267V0H11.892zm4.316 6.844v2.27c0 2.31-1.768 4.148-4.22 4.148h-4.5v1.62c0 1.89.96 3.195 2.73 3.195h5.91v1.597c0 1.581-1.305 2.685-3.552 2.685H8.31v.85h4.266c1.42 0 2.658-.077 3.715-.228 2.65-.383 3.155-1.554 3.155-3.541v-1.942h-6.985v-.85h10.068c1.139 0 1.905-.863 1.905-2.615V9.176c0-1.517-.925-2.502-2.348-2.569h-1.611zM9.54 2.126a.637.637 0 1 1 0 1.275.637.637 0 0 1 0-1.275zm4.908 18.243a.637.637 0 1 1 0 1.275.637.637 0 0 1 0-1.275z"/>
  </svg>
);

const GraphQLIcon = () => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4" width="48" height="48">
    <polygon points="50,9 90,32 90,78 50,100 10,78 10,32" />
    <line x1="50" y1="9" x2="50" y2="100" />
    <line x1="10" y1="32" x2="90" y2="78" />
    <line x1="90" y1="32" x2="10" y2="78" />
    <circle cx="50" cy="9" r="6" fill="currentColor" />
    <circle cx="90" cy="32" r="6" fill="currentColor" />
    <circle cx="90" cy="78" r="6" fill="currentColor" />
    <circle cx="50" cy="100" r="6" fill="currentColor" />
    <circle cx="10" cy="78" r="6" fill="currentColor" />
    <circle cx="10" cy="32" r="6" fill="currentColor" />
  </svg>
);

const VSCodeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="48" height="48">
    <path d="M23.984 6.642a.81.81 0 0 0-.256-.456l-3.324-2.883a.81.81 0 0 0-1.127.068L12.593 11.23 7.828 7.643a.81.81 0 0 0-1.008.026L.602 12.894a.81.81 0 0 0-.01 1.228l6.236 5.437a.81.81 0 0 0 1.018.016l4.757-3.64 6.702 7.797a.81.81 0 0 0 1.135.056l3.324-2.883a.81.81 0 0 0 .221-.861l-3.418-8.873 3.418-8.872a.81.81 0 0 0-.001-.157ZM14.15 12.016l5.776 5.034-5.776 4.418V12.016ZM2.615 13.064l3.54-3.07 3.54 3.07-3.54 3.07-3.54-3.07Z"/>
  </svg>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 24px 80px 24px;
  position: relative;
  overflow: hidden;
  background: ${({ theme }) => theme.bg};
  z-index: 1;

  @media (max-width: 768px) {
    padding: 0 16px 56px 16px;
  }
`;

const Divider = styled.div`
  width: 100%;
  max-width: 1100px;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    ${({ theme }) => theme.card_border} 50%,
    transparent 100%
  );
  position: relative;
  margin-top: 40px;
  margin-bottom: 80px;
  z-index: 1;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${({ theme }) => theme.card_border};
    box-shadow: 0 0 8px ${({ theme }) => theme.card_border};
  }

  @media (max-width: 768px) {
    margin-top: 24px;
    margin-bottom: 56px;
  }
`

const FloatingBackground = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
`;

const FloatingIconWrapper = styled(motion.div)`
  position: absolute;
  color: ${({ theme }) => theme.text_primary};
  opacity: ${({ theme }) => theme.bg === '#FFFFFF' ? '0.15' : '0.10'};
  pointer-events: none;
  z-index: 0;

  @media (max-width: 768px) {
    display: none;
  }
`;

const FloatInnerSlow = styled.div`
  animation: ${floatSlow} 22s infinite ease-in-out;
  display: flex;
`;

const FloatInnerFast = styled.div`
  animation: ${floatFast} 26s infinite ease-in-out;
  display: flex;
`;

const FloatReact = styled(FloatingIconWrapper)`
  top: 12%;
  left: 8%;
`;

const FloatNode = styled(FloatingIconWrapper)`
  top: 22%;
  right: 10%;
`;

const FloatDocker = styled(FloatingIconWrapper)`
  top: 55%;
  left: 4%;
`;

const FloatFigma = styled(FloatingIconWrapper)`
  top: 65%;
  right: 9%;
`;

const FloatGit = styled(FloatingIconWrapper)`
  bottom: 15%;
  left: 16%;
`;

const FloatPython = styled(FloatingIconWrapper)`
  bottom: 10%;
  right: 20%;
`;

const FloatGithub = styled(FloatingIconWrapper)`
  top: 40%;
  left: 22%;
`;

const FloatGraphQL = styled(FloatingIconWrapper)`
  bottom: 45%;
  right: 26%;
`;

const FloatVSCode = styled(FloatingIconWrapper)`
  top: 82%;
  left: 28%;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  z-index: 1;
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
  backdrop-filter: blur(8px);
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    border-color: rgba(133, 76, 230, 0.35);
    box-shadow: 0 0 20px rgba(133, 76, 230, 0.1);
  }
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

const SkillPill = styled(Pill)`
  transition: all 0.2s ease-in-out;
  cursor: default;

  &:hover {
    transform: scale(1.06);
    background: ${({ theme }) => theme.bg === '#FFFFFF' ? 'rgba(0,0,0,0.03)' : 'rgba(255,255,255,0.05)'};
    border-color: rgba(133, 76, 230, 0.35);
  }
`;

const Skills = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });
  // Apply soft spring physics for a more pronounced elastic drift/lag
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 35,
    damping: 20,
    restDelta: 0.001
  });

  const reactY = useTransform(smoothProgress, [0, 1], [80, -220]);
  const nodeY = useTransform(smoothProgress, [0, 1], [100, -160]);
  const dockerY = useTransform(smoothProgress, [0, 1], [140, -260]);
  const figmaY = useTransform(smoothProgress, [0, 1], [120, -180]);
  const gitY = useTransform(smoothProgress, [0, 1], [90, -200]);
  const pythonY = useTransform(smoothProgress, [0, 1], [130, -240]);
  const githubY = useTransform(smoothProgress, [0, 1], [110, -210]);
  const graphqlY = useTransform(smoothProgress, [0, 1], [80, -170]);
  const vscodeY = useTransform(smoothProgress, [0, 1], [120, -230]);

  return (
    <Container id="skills" ref={containerRef}>
      <FloatingBackground>
        <FloatReact style={{ y: reactY }}><FloatInnerSlow><ReactIcon /></FloatInnerSlow></FloatReact>
        <FloatNode style={{ y: nodeY }}><FloatInnerFast><NodeIcon /></FloatInnerFast></FloatNode>
        <FloatDocker style={{ y: dockerY }}><FloatInnerFast><DockerIcon /></FloatInnerFast></FloatDocker>
        <FloatFigma style={{ y: figmaY }}><FloatInnerSlow><FigmaIcon /></FloatInnerSlow></FloatFigma>
        <FloatGit style={{ y: gitY }}><FloatInnerSlow><GitIcon /></FloatInnerSlow></FloatGit>
        <FloatPython style={{ y: pythonY }}><FloatInnerFast><PythonIcon /></FloatInnerFast></FloatPython>
        <FloatGithub style={{ y: githubY }}><FloatInnerSlow><GithubIcon size={48} /></FloatInnerSlow></FloatGithub>
        <FloatGraphQL style={{ y: graphqlY }}><FloatInnerSlow><GraphQLIcon /></FloatInnerSlow></FloatGraphQL>
        <FloatVSCode style={{ y: vscodeY }}><FloatInnerFast><VSCodeIcon /></FloatInnerFast></FloatVSCode>
      </FloatingBackground>
      <Divider />
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
                      <SkillPill key={item.name} variant="outline">{item.name}</SkillPill>
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
