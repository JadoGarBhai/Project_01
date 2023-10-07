import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
    <form className="row g-3">
      <div className="col-md-6">
        <label className="form-label">Email</label>
        <input
          type="email"
          className="form-control"
          name="email"
          onChange={changeHandler}
        />
      </div>

      <div className="col-md-6">
        <label className="form-label">Password</label>
        <input
          type="password"
          className="form-control"
          name="password"
          onChange={changeHandler}
        />
      </div>

      <div className="col-md-6">
        <label className="form-label">Confirm Password</label>
        <input
          type="password"
          className="form-control"
          name="confirmPassword"
          onChange={changeHandler}
        />
      </div>

      <div className="col-12 text-center">
        <button type="submit" className="btn btn-primary">
          Sign in
        </button>
      </div>
    </form>
  );
};

export default Registration;
