import React from "react";

function Signup(props) {
    console.log("props", props);


    return (
        <div>

            <h3 >Sign up</h3>
            <div>
                <p>Username</p>
                <input
                    className="from-control w-100 "
                    type="text"
                    placeholder="username@gmail.com"
                    value={props.email}
                    autoFocus
                    required
                    onChange={(e) => props.handleEmail(e)}
                />

            </div>
            <div>
                <p>Password</p>
                <input
                    className="from-control  w-100"
                    type="password"
                    placeholder="password"
                    value={props.password}
                    required
                    onChange={(e) => props.handlePassword(e)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            props.handleSignup();
                        }
                    }}
                />


            </div>
            <div>
                <button
                    type="button"
                    className="btn btn-primary mt-3 w-100 "
                    onClick={() => props.handleSignup()}
                >
                    Sign up
                </button>
                <div className="d-flex aling-items-center justify-content-center mt-3 ">
                    <p className="text-center mt-3 mr-1">Have an account? </p>
                    <button className="btn btn-link px-2 " onClick={() => props.setHasAccount(!props.hasAccount)} >Sign in</button>
                </div>
            </div>
        </div>
    );
}

export default Signup;