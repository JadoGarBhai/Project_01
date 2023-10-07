import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="body">
      <div className="wrapper">
        <div class="form-container sign-in">
          <form action="#">
            <h2>login</h2>
            <div class="form-group">
              <input type="text" required />
              <i class="fas fa-user"></i>
              <label for="">username</label>
            </div>
            <div class="form-group">
              <input type="password" required />
              <i class="fas fa-lock"></i>
              <label for="">password</label>
            </div>
            <div class="forgot-pass">
              <a href="#">forgot password?</a>
            </div>
            <button type="submit" class="btn">
              login
            </button>
            <div class="link">
              <p>
                Don't have an account?
                <a href="#" class="signup-link">
                  {" "}
                  sign up
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
