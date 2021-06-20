import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

const NavigationBar = () => {
  const history = useHistory();
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>
            <Link to="/">Job website</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link>
                <Link to="/home">Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/">Link</Link>
              </Nav.Link>
              <Button onClick={() => history.push("/login")} variant="danger">
                Login
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
