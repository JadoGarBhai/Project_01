import React, { useState, useEffect } from "react";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../Configure/firebase";
import { useAuthContext } from "../../Context/AuthContext";
import "./Login.css";

const initialState = { email: "", password: "" };

const Login = () => {
  const [state, setState] = useState(initialState);
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  // const [currentUser, setCurrentUser] = useState({});
  const { setIsAuthenticated } = useAuthContext();
  const Navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
      }
    });
  }, []);

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    console.log(state);

    const { email, password } = state;
    console.log("email : ", email, "password : ", password);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        window.toastify("User logged in successfuly!!", "success");
        setIsAuthenticated(true);
        Navigate("/user/dashboard");
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        window.toastify(errorMessage, "error");
      })
      .finally(() => {
        setState(initialState);
        setIsLoading(false);
      });
  };

  return (
    <div className="body">
      <div className="wrapper">
        <div class="form-container sign-in">
          <form onSubmit={handleSubmit}>
            <h2>login</h2>
            <div class="form-group">
              <input
                type="email"
                required
                name="email"
                onChange={handleChange}
              />
              <i className="fas fa-at"></i>
              <label for="">email</label>
            </div>

            <div class="form-group">
              <input
                type="password"
                required
                name="password"
                onChange={handleChange}
              />
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
                <Link to="/user/registration" class="signup-link">
                  sign up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
