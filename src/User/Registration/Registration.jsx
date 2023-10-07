import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Configure/firebase";
import "./Registration.css";

const intialState = {
  email: "",
  password: "",
  confirmPassword: "",
};

const Registration = () => {
  const [state, setState] = useState(intialState);

  const Navigate = useNavigate();

  const changeHandler = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {};

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
              sign up
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
