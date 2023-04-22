import React, { Fragment, useEffect } from "react";
import CustomNav from "../Components/NavBar";
import { Container, Row, Col } from "react-bootstrap";
import { projectsList } from "../utils/helperList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  const getstats = async () => {
    console.log("Getting");
    const res = await fetch(
      `https://github-readme-stats.vercel.app/api?username=CodEsHiVaz&show_icons=true&theme=radical`
    );
    const data = await res.json();

    console.log("getstats  data:", data);
  };
  useEffect(() => {
    getstats();
    document.title = "Shivaji Zirpe | Projects";
  });
  return (
    <>
      <CustomNav />
      <Container className="mt-5">
        {projectsList.map((proj) => (
          <Fragment key={proj.label}>
            <Row className="my-5 px-md-5" xs={1} md={2}>
              <Col>
                <a href={proj.src} target="_blank" rel="noopener noreferrer">
                  <img
                    className="img-fluid proj-image shadow"
                    src={proj.imgSrc}
                    alt={proj.label}
                  />
                </a>
              </Col>
              <Col className="pt-2">
                <h3 className="font-weight-bold color-customBlue mb-0">
                  {proj.label}
                </h3>
                <br />
                Description : <span>{proj.description}</span>
                <br />
                Live Link :{"\u00A0"}
                {"\u00A0"}
                <a href={proj.src} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon
                    icon={faExternalLinkAlt}
                    size="1x"
                    color="black"
                  />
                </a>
                <br />
                Source code :{"\u00A0"}
                {"\u00A0"}
                <a
                  href={proj.githubSrc}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {<FontAwesomeIcon icon={faGithub} size="lg" color="black" />}
                </a>
                <br />
                Tech Stack : <span>{proj.techStack}</span>
              </Col>
            </Row>
          </Fragment>
        ))}

        <div  className="text-center">
          <img
            src="https://github-readme-stats.vercel.app/api?username=CodEsHiVaz&show_icons=true&theme=radical"
            alt=""
          />
          <img
            src="https://github-readme-streak-stats.herokuapp.com/?user=CodEsHiVaz&theme=radical"
            alt=""
          />
        </div>
     
      </Container>
    </>
  );
};

export default Projects;
