import React, { useEffect } from "react";
import CustomNav from "../Components/NavBar";
import { Container, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import curveSvg from "../Icons/curved.svg";
import useWindowDimensions from "../utils/dimensionHelper";
import GmailSvg from "../Icons/gmail";

const Contact = () => {
  const { width } = useWindowDimensions();
  let textContainerWidthClass, heroTextFontSize, quoteFontSize, descFontSize;

  if (width < 768) {
    textContainerWidthClass = "w-100";
    heroTextFontSize = undefined;
    quoteFontSize = 60;
    descFontSize = undefined;
  } else if (width >= 768 && width < 992) {
    textContainerWidthClass = "w-50";
    heroTextFontSize = "xx-large";
    quoteFontSize = 65;
    descFontSize = "inherit";
  } else {
    textContainerWidthClass = "w-50";
    heroTextFontSize = undefined;
    quoteFontSize = 70;
    descFontSize = undefined;
  }

  useEffect(() => {
    document.title = "Shivaji Zirpe | Contact";
  });

  return (
    <>
      <CustomNav />
      <div
        className="position-absolute w-100 d-none d-md-block"
        style={{ height: "100vh", top: 0, zIndex: -1000 }}
      >
        <div
          style={{
            backgroundImage: `url(${curveSvg})`,
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            backgroundSize: `auto 100vh`,
          }}
          className="h-100 position-fixed fixed-top fixed-bottom"
        />
      </div>
      <Container
        className={`${textContainerWidthClass} mt-5 float-md-right text-right mr-lg-5`}
      >
        <h1
          className="pr-lg-5 pr-xs-3 text-boldest mb-0 color-customBlue"
          style={{ fontSize: heroTextFontSize }}
        >
          Lets <br />
          Work <br /> Together!
        </h1>
        <h1
          className="pr-lg-4 pr-xs-2 mb-0 mt-2 color-customBlue"
          style={{ fontSize: quoteFontSize, height: quoteFontSize - 25 }}
        >
          ”
        </h1>
        <h5
          className="pr-lg-5 pr-xs-3 text-wrap color-customBlueLight"
          style={{ fontSize: descFontSize }}
        >
          If you would like to get in touch with me, be it for exploring a
          technology, a business, or to just say hi,feel free to connect me !
        </h5>
        <br />
        <div className="pr-lg-5 pr-xs-3"></div>
        <br />
        <div className="mt-3 mb-3 pr-lg-5 pr-xs-3">
          <Button
            className="contact-btns bg-customBlue mr-2 shadow border-0 py-1"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/shivaji-zirpe-92650919b/",
                "_blank"
              )
            }
          >
            <FontAwesomeIcon size="1x" icon={faLinkedinIn} />
            <span style={{}}>Linkedin</span>
          </Button>
          <Button
            className="contact-btns bg-customBlue mr-2 shadow border-0 py-1 px-2"
            onClick={() =>
              window.open("https://github.com/CodEsHiVaz/", "_blank")
            }
          >
            <FontAwesomeIcon size="1x" icon={faGithub} />
            <span>Github</span>
          </Button>
          <Button
            className="contact-btns bg-customBlue shadow border-0 py-1 px-2"
            onClick={() =>
              window.open(
                'mailto:mobiotech11@gmail.com?subject="Hello !"',
                "_blank"
              )
            }
          >
            <GmailSvg fillColor="#8d81a5" style={{ width: 16 }} />
            <span>Mail</span>
          </Button>
        </div>
      </Container>
    </>
  );
};

export default Contact;
