import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types'
import "./style.scss"
import { useNavigate } from 'react-router';
import { AuthContext } from 'AuthContext';
import BaseTextField from 'general/components/BaseForm/BaseTextField';
import AppButton from 'general/components/AppButton';

function SignUp(props) {
  const navigate = useNavigate();
  const { login, signUp } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSignUp = () => {
    if(password !== confirmPassword) {
      alert("Password and confirm password do not match");
      return;
    }
    signUp(username, password, email, phone);
  };

  return (
    <div className="SignInScreen d-flex min-vh-100 justify-content-center align-items-center bg-secondary">
      <div className="SignInForm">
        <div>
          <h1 style={{ fontWeight: "600", textAlign: "center", paddingBottom: "16px" }}>
            Sign up
          </h1>
          <div>
            <BaseTextField
              className="mb-3"
              name="username"
              placeholder="Enter username..."
              label="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              error="You have not entered a username"
            />
          </div>

          <div>
            <BaseTextField
              className="mb-3"
              name="password"
              placeholder="Enter phone ..."
              label="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              error="You have not entered a phone number"
            />
          </div>

          <div>
            <BaseTextField
              className="mb-3"
              name="email"
              placeholder="Enter email..."
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error="You have not entered an email"
            />
          </div>

          <div>
            <BaseTextField
              className="mb-3"
              type="password"
              name="password"
              placeholder="Enter password..."
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error="You have not entered a password"
            />
          </div>

          <div>
            <BaseTextField
              className="mb-3"
              type="password"
              name="confirm-password"
              placeholder="Confirm password..."
              label="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              error="You have not confirmed your password"
            />
          </div>
          <AppButton
            className="btn-blue mt-5 w-100"
            text="Sign up"
            onClick={handleSignUp}
            disabled={username.length === 0 || password.length === 0}
          />
          <div className="signInFooter">
            If you already have an account, please <a href='#' onClick={() => navigate("/sign-in")}>sign in</a>
          </div>
        </div>
      </div>
    </div>
  );
}

SignUp.propTypes = {}

export default SignUp;
