import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import { jwtDecode } from "jwt-decode";

const initialState = { email: "", password: "", confirmPassword: "" };
const Signup = () => {
  const [state, setState] = useState(initialState);
  // console.log(state);
  const [isPasswordShow, setIsPasswordShow] = useState(false);
  const [isConfirmPasswordShow, setIsConfirmPasswordShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    setState({ ...state, [e.target.name]: e.target.value });
  };

  // const { email, password, confirmPassword } = state;
  const handleSubmit = (e) => {
    e.preventDefault();
    let password = state.password;
    let confirmPassword = state.confirmPassword;
    if (password === confirmPassword) {
      axios
        .post("http://localhost:8000/auth/register", state)
        .then((res) => {
          console.log("res.data : ", res.data);
          alert("User successfuly registered");
          // setIsRegister(true);
          setState(initialState);
        })
        .catch((error) => {
          console.log("Error : ", error.message);
        });
    } else {
      alert("Password and Confirm Password not matched.");
    }
  };

  //   const Navigate = useNavigate();
  return (
    <>
      <div className="mvh-100 SignUpPage d-flex justify-content-center align-items-center">
        <div className="container ">
          <div className="row">
            <div className="col">
              <Link className="btn btn-home h1" to="/">
                <i class="fa-solid fa-arrow-left"></i>
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
              <div className="card SignUpCard w-100">
                <div className="div card-body">
                  <h3>Sign Up</h3>
                  <form onSubmit={handleSubmit}>
                    <label for="exampleInputEmail1" className="form-label">
                      Email
                    </label>
                    <br />
                    <div class="input-group flex-nowrap">
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        placeholder="Email"
                        aria-label="email"
                        name="email"
                        value={state.email}
                        required
                        onChange={handleChange}
                      />
                    </div>
                    <label for="password" className="form-label">
                      Password
                    </label>
                    <div class="input-group flex-nowrap">
                      <input
                        type={isPasswordShow ? "text" : "password"}
                        className="form-control"
                        id="password"
                        placeholder="Password"
                        name="password"
                        value={state.password}
                        aria-label="password"
                        aria-describedby="addon-wrapping"
                        required
                        onChange={handleChange}
                      />
                      <button
                        type="button"
                        class="input-group-text"
                        onClick={() => {
                          setIsPasswordShow(!isPasswordShow);
                        }}
                      >
                        <i
                          class={`fa-solid fa-eye${
                            isPasswordShow ? "" : "-slash"
                          }`}
                        ></i>
                      </button>
                    </div>
                    <label for="confirmPassword" className="form-label">
                      Confirm Password
                    </label>
                    <div class="input-group flex-nowrap">
                      <input
                        type={isConfirmPasswordShow ? "text" : "password"}
                        className="form-control"
                        id="confirmPassword"
                        placeholder="Confirm Password"
                        name="confirmPassword"
                        value={state.confirmPassword}
                        aria-label="confirmPassword"
                        aria-describedby="addon-wrapping"
                        required
                        onChange={handleChange}
                      />
                      <button
                        type="button"
                        class="input-group-text"
                        onClick={() => {
                          setIsConfirmPasswordShow(!isConfirmPasswordShow);
                        }}
                      >
                        <i
                          class={`fa-solid fa-eye${
                            isConfirmPasswordShow ? "" : "-slash"
                          }`}
                        ></i>
                      </button>
                    </div>
                    <div className="text-center">
                      <button
                        type="submit"
                        disabled={isLoading}
                        class="btn signUpButton mt-2 mb-2"
                      >
                        {!isLoading ? (
                          "Sign Up"
                        ) : (
                          <div className="spinner-border spinner-border-sm"></div>
                        )}
                      </button>
                    </div>
                  </form>
                  <div style={{ position: "relative" }}>
                    <span className="OR">
                      <i class="fa-solid fa-o"></i>
                      <i class="fa-solid fa-r"></i>
                    </span>
                    <hr />
                  </div>

                  {/* //icons */}
                  <div className="text-center">
                    Already a user?{" "}
                    <span>
                      <Link to="/login">Login</Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
