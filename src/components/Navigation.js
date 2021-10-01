import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

import './Navigation.scss';
import profile from '../data/profile.json';
import socials from '../data/socials.json';


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
      <Navbar collapseOnSelect fixed="top" expand="lg">
        <Container>
          <Navbar.Brand>
            {socials.filter(social => social.link !== "").map((social, s_index) =>
              <a key={s_index} href={social.link}>
                <i className={"bi bi-" + social.name}></i>
              </a>
            )}

            <a href={"mailto:" + profile.email}>
              <i className="bi bi-envelope-fill"></i>
            </a>
          </Navbar.Brand>

          <Navbar.Toggle className="bi bi-list" />
          <Navbar.Collapse>
            <Nav>

              {links.map((link, i) =>
                <Nav.Link
                  key={i}
                  eventkey={i}
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
    </header >
  );
}

export default Navigation;
