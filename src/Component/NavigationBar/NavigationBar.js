import jwt_decode from "jwt-decode";
import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { postContext } from "../../App";

const NavigationBar = () => {
  const history = useHistory();
  const token = sessionStorage.getItem("token");
  const [postDetails, setPostDetails] = useContext(postContext);

  const handleSignOut = () => {
    setPostDetails({});
    sessionStorage.removeItem("token");
  };

  const isLoggedIn = () => {
    const token = sessionStorage.getItem("token");
    if (!token) {
      return false;
    }
    const decodedToken = jwt_decode(token);
    // get current time
    const currentTime = new Date().getTime() / 1000;
    // compare the expiration time with the current time
    // will return false if expired and will return true if not expired
    return decodedToken.exp > currentTime;
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
              <Nav.Link>
                <Link to="/">Link</Link>
              </Nav.Link>
            </Nav>
            {postDetails.email || isLoggedIn() ? (
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
