import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Configure/firebase";
import { useAuthContext } from "../../Context/AuthContext";
import "./Registration.css";

const initialState = {
  email: "",
  password: "",
  confirmPassword: "",
};

const Registration = () => {
  const [state, setState] = useState(initialState);
  const [isProcessing, setIsProcessing] = useState(false);
  const { setIsAuthenticated } = useAuthContext();

  const Navigate = useNavigate();

  const changeHandler = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setIsProcessing(true);

    const { email, password, confirmPassword } = state;

    if (confirmPassword !== password) {
      window.toastify("Confirm password wrong", "error");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        window.toastify("User logged in successfuly!!", "success");
        setIsAuthenticated(true);
        Navigate("/user/dashboard");
      })
      .catch((error) => {
        window.toastify(error.message, "error");
      })
      .finally(() => {
        setState(initialState);
        setIsProcessing(false);
      });
  };

  return (
    <div className="body">
      <div className="wrapper">
        <div className="form-container sign-up">
          <form onSubmit={submitHandler}>
            <h2>sign up</h2>

            <div className="form-group">
              <input
                type="email"
                required
                name="email"
                onChange={changeHandler}
              />
              <label for="">email</label>
              <i className="fas fa-at"></i>
            </div>

            <div className="form-group">
              <input
                type="password"
                required
                name="password"
                onChange={changeHandler}
              />
              <label for="">password</label>
              <i className="fas fa-lock"></i>
            </div>

            <div className="form-group">
              <input
                type="password"
                required
                name="confirmPassword"
                onChange={changeHandler}
              />
              <label for="">confirm password</label>
              <i className="fas fa-lock"></i>
            </div>

            <button type="submit" className="btn">
              {!isProcessing ? (
                <span>Sign Up</span>
              ) : (
                <div className="spinner spinner-grow spinner-grow-sm"></div>
              )}
            </button>

            <div className="link">
              <p>
                You already have an account?
                <Link to="/user/login" className="signin-link">
                  sign in
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
