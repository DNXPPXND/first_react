import React from "react";
//import { Container } from "react-bootstrap";
//import { useNavigate } from "react-router-dom";


function Signin(props) {
    //const navigate = useNavigate();

    const handleFromSubmit = (e) => {
        e.preventDefault();
        props.handleSignin();
    };

    return (
        <div>
            <h3 >Sign in</h3>
            <form onSubmit={handleFromSubmit}>



                <div>
                    <p>Username</p>
                    <input
                        className="from-control w-100"
                        type="text"
                        placeholder="gmail"
                        autoFocus
                        required
                        value={props.email}
                        onChange={(e) => props.handleEmail(e)}
                    />

                </div>
                <div>
                    <p>Password</p>
                    <input
                        className="from-control w-100"
                        type="password"
                        placeholder="password"
                        required
                        value={props.password}
                        onChange={(e) => props.handlePassword(e)}
                    />

                </div>
                <div>
                    <button
                        className="btn btn-primary btn-sm w-100 mt-2"
                        onClick={() => props.handleSignin()}
                    >
                        Sign in
                    </button>
                    <div className="d-flex align-items-center justify-content-center">
                        <p className="text-center mt-3 mr-1">Don't have an account ?</p>
                        &nbsp;
                        <button
                            type="button"
                            className="btn btn-link px-0"
                            onClick={() => props.setHasAccount(!props.hasAccount)}
                        >
                            Sign up
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Signin;