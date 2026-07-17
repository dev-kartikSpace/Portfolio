import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from './utils/Themes.js'
import Navbar from "./components/Navbar";
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Education from "./components/Education";
import styled from "styled-components";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Router>
        <Navbar />
        <Body>
          <HeroSection />
          <Skills />
          <ThemeProvider theme={darkTheme}>
            <Experience />
          </ThemeProvider>
          <Education />
          <Projects />
          <Contact />
          <Footer />
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
