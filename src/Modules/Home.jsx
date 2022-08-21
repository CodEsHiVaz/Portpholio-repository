import React, { useEffect } from "react";
import CustomNav from "../Components/NavBar";
import { Container, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import useWindowDimensions from "../utils/dimensionHelper";
import {
  faEnvelopeSquare,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";

const Home = ({ history }) => {
  useEffect(() => {
    document.title = "Shivaji Zirpe | Portpholio";
  });
  const { width } = useWindowDimensions();

  return (
    <div>
      <CustomNav />
      <div
        className="position-absolute"
        style={{
          height: "100vh",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: -1,
        }}
      >
        <Container className="h-100">
          <div className="d-flex h-100">
            <div className={`my-auto ${width > 760 ? "w-50" : ""}`}>
              <div>
                <div className="">
                  <span className="color-customBlueLight h5 font-weight-bold">
                    Hello !
                  </span>
                  <br />
                  <span className="color-customBlue h1 font-weight-bold">
                    I'm Shivaji Zirpe
                  </span>
                  <br />
                  <span className="color-customBlueLight h3">
                    I'm a <span className="font-weight-bold">full stack</span>{" "}
                    developer
                  </span>
                  <br />
                  <br />
                  <span className="color-customBlueLight h5">
                    I specialize in developing and deploying responsive websites
                    and web applications using MERN stack and curious
                    enthusiastic human
                  </span>
                  <br />
                </div>
                <div>
                  <div className="d-flex mt-4">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/CodEsHiVaz/"
                      className="color-customBlue p-0 mr-3"
                    >
                      <FontAwesomeIcon size="2x" icon={faGithubSquare} />
                    </a>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.linkedin.com/in/shivaji-zirpe-92650919b/"
                      className="color-customBlue p-0 mr-3"
                    >
                      <FontAwesomeIcon size="2x" icon={faLinkedin} />
                    </a>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="mailto:mobiotech11@gmail.com"
                      className="color-customBlue p-0 mr-3"
                    >
                      <FontAwesomeIcon size="2x" icon={faEnvelopeSquare} />
                    </a>
                  </div>
                  <br />
                  <a
                    href={"Shivaji Zirpe Resume.pdf"}
                    download={"Shivaji Zirpe Resume.pdf"}
                    rel="noreferrer"
                  >
                    <Button className="bg-customBlue font-weight-bold shadow border-0">
                      Resume <FontAwesomeIcon size="1x" icon={faDownload} />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
            <div className="w-50 my-auto d-none d-md-block">
              <img
                style={{
                  width: "70%",
                  marginLeft: "15%",
                }}
                src="profile.png"
                alt=""
              />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Home;
