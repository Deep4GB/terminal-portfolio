import { useContext, useEffect } from "react";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectsIntro,
  ProjectTitle,
} from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Projects: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command is redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "projects")) {
      projects.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4"]) ? (
      <Usage cmd="projects" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="projects">
      <ProjectsIntro>
        Actions speak louder than words, right?<br/> 
        Let's dive into my realm of projects where the <br/>
        code does the talking. Here's a glimpse you <br/>
        wouldn't want to overlook.
      </ProjectsIntro>
      {projects.map(({ id, title, desc }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
          <ProjectDesc>{desc}</ProjectDesc>
        </ProjectContainer>
      ))}
      <Usage cmd="projects" marginY />
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "Stock Market Predictor",
    desc: "Predict the next day's closing price of any stock using machine learning models.",
    url: "https://github.com/Deep4GB/Stock-Market-Predictor",
  },
  {
    id: 2,
    title: "Resume Parsing Using NLP",
    desc: "An application for users and recruiters to extract information from multiple resumes using Natural Language Processing (NLP) techniques.",
    url: "https://github.com/Deep4GB/Resume-NLP-Parser",
  },
  {
    id: 3,
    title: "CampusAgile",
    desc: "A project management software developed using TypeScript, React, PostgreSQL, NestJS, featuring kanban, scrum, and collaboration tools for managing projects.",
    url: "https://github.com/dharmik529/CampusAgile",
  },
  {
    id: 4,
    title: "Hotel Web Application",
    desc: "A full CRUD application developed in Java and SQL allowing employees to manage hotel bookings.",
    url: "https://github.com/Deep4GB/HotelWebApplication",
  },
  {
    id: 5,
    title: "Maze Solver",
    desc: "A Python GUI application using the A* algorithm that enables users to create, modify, and visualize maze-solving with start and end points.",
    url: "https://github.com/Deep4GB/MazeSolver",
  },
];


export default Projects;
