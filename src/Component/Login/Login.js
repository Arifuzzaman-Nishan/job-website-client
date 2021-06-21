import { Radio } from "antd";
import firebase from "firebase/app";
import "firebase/auth";
import { React, useContext, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router";
import { postContext } from "../../App";
import firebaseConfig from "./firebaseConfiq";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const [message, setMessage] = useState({
    success: "",
    error: "",
    value: true,
  });

  // use constext api
  const [postDetails, setPostDetails] = useContext(postContext);

  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  // if the user is a new user
  const [newUser, setNewUser] = useState(false);
  const handleNewUser = (e) => {
    setNewUser(!newUser);
    setMessage({});
    reset();
  };

  const [radioValue, setRadioValue] = useState("employer");

  const handlOnChange = (e) => {
    setRadioValue(e.target.value);
  };

  const password = useRef({});
  password.current = watch("password", "");

  // signUp and signIn
  const onSubmit = (data) => {
    const { email, password } = data;

    // create an account
    if (newUser && email && password) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          console.log("nishan");
          storeAuthToken(data);
        })
        .catch((error) => {
          const errorMessage = error.message;
          console.log(errorMessage);
        });
    } else {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          console.log("sign in successfully");

          // for admin login checking
          fetch("http://localhost:5000/isAdmin", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({ email: email }),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data) {
                console.log("admin" + data);
                sessionStorage.setItem("admin", true);
              }
            });

          // for employer login checking
          fetch("http://localhost:5000/isEmployer", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({ email: email }),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data) {
                console.log("employer" + data);
                sessionStorage.setItem("employer", true);
              }
            });

          if (sessionStorage.getItem("admin")) {
            history.replace("/admin");
          } else if (sessionStorage.getItem("employer")) {
            history.replace("/jobpost");
          } else {
            history.replace("/home");
          }

          
        })
        .catch((error) => {
          const errorMessage = error.message;
        });
    }
  };

  const storeAuthToken = (data) => {
    const { name, email } = data;
    firebase
      .auth()
      .currentUser.getIdToken(/* forceRefresh */ true)
      .then((idToken) => {
        console.log(idToken);
        sessionStorage.setItem("token", idToken);

        alert("successfully log in");

        setPostDetails({ ...postDetails, email: email });

        if (radioValue === "employer") {
          fetch("http://localhost:5000/employer", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
              name: name,
              email: email,
            }),
          }).then((res) => {
            if (res) {
              alert("successfully data send");
              // console.log(postDetails);
            }
          });
        }

        radioValue === "employer"
          ? history.replace("/package")
          : history.replace(from);
      })
      .catch((err) => {
        // Handle error
        console.log(err.message);
      });
  };

  // const createAccountChecking = () => {

  //     // for employer login checking
  //     fetch("http://localhost:5000/isEmployer", {
  //       method: "POST",
  //       headers: {
  //         "content-type": "application/json",
  //       },
  //       body: JSON.stringify({ email: email }),
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         if (data) {
  //           console.log("employer" + data);
  //           sessionStorage.setItem("employer", true);
  //         }
  //       });

  // }

  return (
    <div>
      <Container>
        <div className="container d-flex justify-content-center">
          <div
            className="card pl-5 pr-5 pt-5 pb-3 mt-2"
            style={{ width: "23rem" }}
          >
            {newUser ? (
              <h2 className="text-center text-primary">Sign Up</h2>
            ) : (
              <h2 className="text-center text-primary">Login</h2>
            )}

            <form onSubmit={handleSubmit(onSubmit)}>
              {/* for name */}
              {newUser && (
                <input
                  className="mt-3 form-control"
                  placeholder="Your name"
                  {...register("name", { required: true })}
                />
              )}
              {errors.name && (
                <span className="text-danger">name field is required</span>
              )}

              {/* for email */}
              <input
                className="mt-3 form-control"
                placeholder="Your email"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-danger">email field is required</span>
              )}

              {/* for password */}
              <input
                className="mt-3 form-control"
                type="password"
                placeholder="Your password"
                {...register("password", {
                  required: "You must specify a password",
                  pattern: /(?=.*?[a-z])(?=.*?[0-9])/,
                  minLength: {
                    value: 8,
                    message: "Password must have at least 8 characters",
                  },
                })}
              />
              {errors.password && (
                <span className="text-danger">
                  {errors.password.message ||
                    "password should contain at least 1 letter and 1 number"}
                </span>
              )}

              {/* for confirm password */}
              {newUser && (
                <input
                  className="mt-3 form-control"
                  type="password"
                  placeholder="Confirm password"
                  {...register("confirmPassword", {
                    required: true,
                    validate: (value) =>
                      value === password.current ||
                      "The passwords do not match",
                  })}
                />
              )}
              {errors.confirmPassword && (
                <span className="text-danger">
                  {errors.confirmPassword.message}
                </span>
              )}

              {/* check employee or not */}
              {newUser && (
                <div className="mb-3">
                  <p>What are you looking for:</p>
                  <Radio.Group onChange={handlOnChange} defaultValue="employer">
                    <Radio value="employer">Employer</Radio>
                    <Radio value="JobSeeker">Job seeker</Radio>
                  </Radio.Group>
                </div>
              )}

              {newUser ? (
                <input
                  className="mt-3 btn bg-danger form-control text-white"
                  type="submit"
                  value="Create an account"
                />
              ) : (
                <input
                  className="mt-4 btn btn-danger form-control text-white"
                  type="submit"
                  value="Log In"
                />
              )}
            </form>

            <div>
              {/* for last text */}
              {newUser ? (
                <div>
                  <small>
                    <p className="mt-3 text-center">Already have an account</p>
                  </small>
                  <p onClick={handleNewUser} className="link text-center">
                    Log In
                  </p>
                </div>
              ) : (
                <div>
                  <small>
                    <p onClick={handleNewUser} className="mt-3 text-center">
                      Don't have an account
                    </p>
                  </small>
                  <p onClick={handleNewUser} className="link text-center">
                    Sign Up
                  </p>
                </div>
              )}
            </div>
            {message.success ? (
              <p className="text-success font-weight-bold">{message.success}</p>
            ) : (
              <p className="text-danger font-weight-bold">{message.error}</p>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Login;
