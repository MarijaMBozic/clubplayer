import React from 'react'
import "./index.scss"

function RegistrationUI(props) {
    const {
        registrationData,
        handleChange,
        handleSubmit,
        regIsValid,
        errorMessage } = props;

    const {
        email,
        password,
        confirmpassword
    } = registrationData

    return (
        <div className="registrationForm">
            <h2>Registration</h2>
            < form onSubmit={handleSubmit} >
                <div className="registrationForm-item">
                    <label className="regLabel-item">
                        Email:
                        <input
                            type="text"
                            name="email"
                            value={email || ''}
                            onChange={handleChange("email")}
                            placeholder="Email"
                        />
                        {
                            errorMessage.email && (
                                <p className="errorMessage">
                                    {errorMessage.email}
                                </p>
                            )
                        }
                    </label>
                </div>
                <div className="registrationForm-item">
                    <label className="regLabel-item">
                        Passworde:
                        <input
                            type="text"
                            name="password"
                            value={password || ''}
                            onChange={handleChange("password")}
                            placeholder="Password"
                        />
                        {
                            errorMessage.password && (
                                <p className="errorMessage">
                                    {errorMessage.password}
                                </p>
                            )
                        }
                    </label>
                </div>
                <div className="registrationForm-item">
                    <label className="regLabel-item">
                        Confirmpassword:
                    <input
                            type="text"
                            name="confirmpassword"
                            value={confirmpassword || ''}
                            onChange={handleChange("confirmpassword")}
                            placeholder="Confirm password"
                        />
                        {
                            errorMessage.confirmpassword && (
                                <p className="errorMessage">
                                    {errorMessage.confirmpassword}
                                </p>
                            )
                        }
                    </label>
                </div>
                <button type="submit" disabled={!regIsValid} >Register</button>
            </form >
        </div >
    )
}

export default RegistrationUI