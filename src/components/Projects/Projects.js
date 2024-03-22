import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import tictac from "../../Assets/Projects/tictac.png";
// import weather from "../../Assets/Projects/weather.png";
import snakegame from "../../Assets/Projects/snakegame.png";
import calculator from "../../Assets/Projects/calculator.png";
import soothe from "../../Assets/Projects/soothe.png";
import currency from "../../Assets/Projects/currency.png";
import movie from "../../Assets/Projects/movie.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={soothe}
              isBlog={false}
              title="SOOTHE-Mental Health Care Portal"
              description="SOOTHE is an innovative mental health care portal designed to empower individuals in their journey towards mental wellness. With a user-friendly interface and a comprehensive range of resources, Soothe offers personalized support and guidance to users of all ages and backgrounds."
              ghLink="https://github.com/sanssingh2408/Soothe-Mental-Health-Care-Portal"
              demoLink="https://siddheshshinde-tech.github.io/Soothe/#/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movie}
              isBlog={false}
              title="LOVELY-Movie Information Portal"
              description="LOVELY, your ultimate destination for all things cinema! Whether you're a dedicated film enthusiast or just looking for your next movie night pick, LOVELY has you covered. From timeless classics to the latest blockbusters, you'll find everything you need to know right here."
              ghLink="https://github.com/sanssingh2408/Movie_Info_Website"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={currency}
              isBlog={false}
              title="Currency Converter"
              description="User-friendly online platform designed to facilitate quick and accurate currency conversions. Catering to both casual users and businesses alike, it offers a seamless experience for individuals needing to convert currencies for various purposes such as travel, online shopping, or financial transactions."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tictac}
              isBlog={false}
              title="TIC-TAC-TOE Game"
              description="A virtual platform designed for users to play the classic game of Tic-Tac-Toe online. Offering a simple and intuitive interface, the website allows players to enjoy the timeless game either against an AI opponent or against other players in multiplayer mode. With customizable game settings and responsive design, users can enjoy seamless gameplay across various devices."
              ghLink="https://github.com/sanssingh2408/currency-converter-using-ReactJS"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calculator}
              isBlog={false}
              title="Modern Calculator"
              description="Your go-to destination for powerful online calculations! Our website offers a sleek and intuitive interface designed to simplify complex mathematical tasks for users of all levels. Whether you're crunching numbers for school, work, or personal projects, our advanced calculator tools provide accuracy and efficiency. "
              ghLink="https://github.com/sanssingh2408/Calculator-app-using-reactJS"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={snakegame}
              isBlog={false}
              title="Snake Game"
              description="Experience the thrill of controlling a pixelated serpent as it slithers across the screen, devouring pellets and growing longer with each meal. Our website offers a modern twist on this timeless classic, featuring smooth controls, vibrant graphics, and addictive gameplay."
              ghLink="https://github.com/sanssingh2408/Snake-Game-Using-JS"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
