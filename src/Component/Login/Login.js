import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import firebase from "firebase/app";
import "firebase/auth";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import firebaseConfig from "./firebaseConfiq";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const Login = () => {
  const handleGoogleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const { email, displayName } = result.user;
        console.log(email, displayName);
        storeAuthToken();
      })
      .catch((err) => {
        const errorCode = err.code;
        const errorMessage = err.message;
        console.log(errorCode, errorMessage);
      });
  };

  const storeAuthToken = () => {
    firebase
      .auth()
      .currentUser.getIdToken(/* forceRefresh */ true)
      .then((idToken) => {
        console.log(idToken);
        sessionStorage.setItem("token", idToken);

        // result? history.replace('/Dashboard') : history.replace(from);
      })
      .catch((err) => {
        // Handle error
        console.log(err.message);
      });
  };

  return (
    <div>
      <Container>
        <Row
          style={{ height: "100vh" }}
          className="d-flex justify-content-center align-items-center"
        >
          <Col md={4}>
            <h3 className="text-center mb-5">Login With</h3>
            <button
              onClick={handleGoogleSignIn}
              className="corner d-flex align-items-center justify-content-around btn btn-danger w-100"
              type="reset"
            >
              <FontAwesomeIcon size="2x" className="google" icon={faGoogle} />
              <span>continue with google</span>
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
