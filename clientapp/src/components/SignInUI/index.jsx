import React from 'react'
import "./index.scss"

function SignInUI(props) {
    const {
        signInData,
        handleChange,
        handleSubmitSignIn
    } = props;

    const {
        username,
        password
    } = signInData

    return (
        <div className="signInForm">
            <h2>Sign In</h2>
            <form onSubmit={handleSubmitSignIn}>
                <div className="signInForm-item">
                    <label className="signInLabel-item">
                        Username:
                        <input
                            type="email"
                            name="username"
                            value={username}
                            onChange={handleChange("username")}
                            placeholder="Username"
                            required
                        />
                    </label>
                </div>
                <div className="signInForm-item">
                    <label className="signInLabel-item">
                        Passworde:
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={handleChange("password")}
                            placeholder="Password"
                            required
                        />
                    </label>
                </div>
                <button type="submit" >Sign In</button>
            </form>
        </div>
    )
}

export default SignInUI