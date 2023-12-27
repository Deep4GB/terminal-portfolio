import React from 'react';
import {
  AboutWrapper,
  HighlightSpan,
} from '../styles/About.styled';

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hello there! I'm <HighlightSpan>Deep Patel</HighlightSpan>, a passionate computer science student at The Pennsylvania State University - Abington.
      </p>
      <p>
        My journey revolves around delving into the ever-evolving tech realm, where I enthusiastically craft web applications aimed at tackling real-life challenges.
      </p>
    </AboutWrapper>
  );
};

export default About;
