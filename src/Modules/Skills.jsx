import React, { useEffect } from "react";
import CustomNav from "../Components/NavBar";
import { Container, Row, Col } from "react-bootstrap";
import IconCard from "../Components/IconCard";
import {
  showFrontend,
  backendlist,
  cloud_and_db,
  soft_tools,
} from "../utils/helperList";

const Skills = () => {
    useEffect(() => {
      document.title = "Shivaji Zirpe | Skills";
    });
  return (
    <>
      <CustomNav />
      <Container className="mt-5">
        <h2 className="color-customBlue">Front-End stack </h2>
        <Row>
          <Col>
            <Row>
              {showFrontend.map((s) => (
                <IconCard key={s.label} src={s.src} />
              ))}
            </Row>
          </Col>
        </Row>
        <h2 className="color-customBlue">Back-End stack </h2>
        <Row>
          <Col>
            <Row
     
            >
              {backendlist.map((s) => (
                <IconCard key={s.label} src={s.src} />
              ))}
            </Row>
          </Col>
        </Row>
        <h2 className="color-customBlue">Databases & Cloud Hosting </h2>
        <Row>
          <Col>
            <Row
      
            >
              {cloud_and_db.map((s) => (
                <IconCard key={s.label} src={s.src} />
              ))}
            </Row>
          </Col>
        </Row>
        <h2 className="color-customBlue">Software & Tools</h2>
        <Row>
          <Col>
            <Row>
              {soft_tools.map((s) => (
                <IconCard key={s.label} src={s.src} />
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Skills;
