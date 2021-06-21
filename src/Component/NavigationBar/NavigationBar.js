import React, { useContext, useState } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { postContext } from "../../App";

const NavigationBar = () => {
  const history = useHistory();
  const [postDetails, setPostDetails] = useContext(postContext);

  const [admin, setAdmin] = useState(false);
  const [employer, setEmployer] = useState(false);

  // const employer = sessionStorage.getItem('employer');
  // const admin = sessionStorage.getItem('admin');

  console.log(sessionStorage.getItem("admin"));
  console.log(postDetails);

  const handleSignOut = () => {
    setPostDetails({});
    sessionStorage.removeItem("employer");
    sessionStorage.removeItem("admin");
  };

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
              {postDetails.admin && (
                <Nav.Link>
                  <Link to="/admin">Admin Dashaboard</Link>
                </Nav.Link>
              )}
              {postDetails.employer && (
                <Nav.Link>
                  <Link to="/jobpost">Employer Jobpost</Link>
                </Nav.Link>
              )}
            </Nav>
            {postDetails.email ? (
              <div className="p-2">
                <Button
                  className="mr-4"
                  onClick={handleSignOut}
                  variant="outline-success"
                >
                  SignOut
                </Button>
              </div>
            ) : (
              <div className="mr-4">
                <Button
                  onClick={() => history.push("/login")}
                  variant="outline-success"
                >
                  LogIn
                </Button>
              </div>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
