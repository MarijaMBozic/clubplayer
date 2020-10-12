import React, { useState } from 'react'
import SignInUI from './../../components/SignInUI'
import Login from './../../api/Login'

const initialState = {
    grant_type: "password",
    username: "",
    password: ''
}

function SignIn(props) {
    const [signInData, setSignInData] = useState(initialState);

    const handleChange = (fieldName) => (e) => {
        setSignInData({
            ...signInData,
            [fieldName]: e.target.value
        })
    };
    console.log(signInData);
    const handleSubmitSignIn = (e) => {
        e.preventDefault();

        Login(signInData)
    }

    return (
        <SignInUI
            signInData={signInData}
            handleChange={handleChange}
            handleSubmitSignIn={handleSubmitSignIn}
        />
    )
}

export default SignIn