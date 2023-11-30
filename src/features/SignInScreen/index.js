import { AuthContext } from "AuthContext";
import AppButton from "general/components/AppButton";
import BaseTextField from "general/components/BaseForm/BaseTextField";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";

SignInScreen.propTypes = {};

function SignInScreen(props) {
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSignIn = () => {
        login(username, password);
        return;
    };

    return (
        <div className="SignInScreen d-flex min-vh-100 justify-content-center align-items-center bg-secondary">
            <div className="SignInForm">
                <div>
                    <h1 style={{ fontWeight: "600", textAlign: "center" }}>
                        Sign in
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
                            type="password"
                            name="password"
                            placeholder="Enter password..."
                            label="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            error="You have not entered a password"
                        />
                    </div>
                    <AppButton
                        className="btn-blue mt-5 w-100"
                        text="Sign in"
                        onClick={handleSignIn}
                        disabled={username.length === 0 || password.length === 0}
                    />

                    <div className="signInFooter">
                        If you don't have an account, please{" "} <a href='#' onClick={() => navigate("/sign-up")}>sign up</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignInScreen;
