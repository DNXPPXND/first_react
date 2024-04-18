import React, { useState, useEffect } from "react";
import Signin from "./Signin";
import Signup from "./Signup";
import { Container } from "react-bootstrap";
import {
    createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword
} from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import profileImg from "../assets/bbb.jpg";

function Home() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [hasAccount, setHasAccount] = useState(false);
    const handleEmail = (e) => {
        setEmail(e.target.value);
    };
    const handlePassword = (e) => {
        setPassword(e.target.value);

    };

    const authListenner = () => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                
            }
            else {
                
            }
        });
    };

    useEffect(() => {
        authListenner();
    }, []);

    const handleSignup = () => {
        createUserWithEmailAndPassword(getAuth(), email, password)
            .then((response) => {
                navigate("/profile");
                window.alert("Sign up successfully!");
                window.localStorage.setItem("user", response.user.email);
                setEmail(response.user.email);
                console.log("response", response);
            })
            .catch((err) => {
                console.log("err", err);
            });
    };
    const handleSignin = () => {
        signInWithEmailAndPassword(getAuth(), email, password)
            .then((response) => {
                navigate("/profile");
                window.alert("Sign in successfully!");
                window.localStorage.setItem("user", response.user.email);
                setEmail(response.user.email);
                console.log("response", response);
            })
            .catch((err) => {
                console.log("err", err);
            });
    };
    return (<Container className="shadow p-4 bg-white mb-5 rounded" style={{ width: "500px" }}>
        <h1 className="text-center">HELLO WORLD</h1>
        <div className="text-center mt-3">
            <img src={profileImg} alt="profileImg" width={200} />

        </div>
        {hasAccount ? (
            <Signup
                email={email}
                password={password}
                hasAccount={hasAccount}
                setHasAccount={setHasAccount}
                handleEmail={handleEmail}
                handlePassword={handlePassword}
                handleSignup={handleSignup}
            />
        ) : (
            <Signin
                email={email}
                password={password}
                hasAccount={hasAccount}
                setHasAccount={setHasAccount}
                handleEmail={handleEmail}
                handlePassword={handlePassword}
                handleSignin={handleSignin} />

        )}




    </Container>
    )
}

export default Home;