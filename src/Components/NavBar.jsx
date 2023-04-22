import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import useWindowDimensions from "../utils/dimensionHelper";

const navItems = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "Skills",
    route: "/skills",
  },
  {
    label: "Projects",
    route: "/projects",
  },
  {
    label: "Contact",
    route: "/contact",
  },
];

const CustomNav = () => {
  const { width } = useWindowDimensions();
  const navbarBgColor = width < 768 ? "white" : "transparent";
  return (
    <div>
      <Navbar bg="transparent" expand="md" className="mt-2">
        <Link
          className="font-weight-bold s-logo text-white text-decoration-none"
          to="/"
        >
          S
        </Link>
        <Navbar.Toggle className="border-0" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className={`bg-${navbarBgColor}`}
        >
          <Nav className="mx-auto">
            {navItems.map((item) => (
              <Nav.Link className="text-center navLink" key={item.label}>
                <NavLink
                  exact
                  className="color-customBlue w-100 text-decoration-none"
                  activeClassName="font-weight-bold"
                  to={item.route}
                >
                  {item.label}
                </NavLink>
              </Nav.Link>
            ))}
            
       <a
              href={"Shivaji Zirpe Resume.pdf"}
              download={"Shivaji Zirpe Resume.pdf"}
              rel="noreferrer"
              className="color-customBlue w-100 mt-2 text-decoration-none text-center align-middle "
              activeClassName="font-weight-bold"
            >
              Resume
            </a>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default CustomNav;
