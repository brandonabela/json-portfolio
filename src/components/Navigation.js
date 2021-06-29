import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

import './Navigation.scss';


function Navigation() {
  const links = [
    { path: "/", text: "About" },
    { path: "/education", text: "Education" },
    { path: "/work", text: "Work" },
    { path: "/skills", text: "Skills" },
    { path: "/portfolio", text: "Portfolio" },
    { path: "/contact", text: "Contact" },
  ];

  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  return (
    <header>
      <Navbar collapseOnSelect sticky="top" expand="lg">
        <Container>
          <Navbar.Brand>
            <a href="https://github.com/brandonabela/"> <i className="bi bi-github"></i> </a>
            <a href="https://www.linkedin.com/in/brandon-abela/"> <i className="bi bi-linkedin"></i> </a>
            <a href="mailto:brandonabela9@gmail.com"> <i className="bi bi-envelope-fill"></i> </a>
          </Navbar.Brand>

          <Navbar.Toggle className="bi bi-list" />
          <Navbar.Collapse>
            <Nav>

              {links.map((link, i) =>
                <Nav.Link
                  eventKey={i}
                  as={Link}
                  to={link.path}
                  className={splitLocation[1] === link.path.substr(1) ? "active" : ""}
                >
                  {link.text}
                </Nav.Link>
              )}

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Navigation;
