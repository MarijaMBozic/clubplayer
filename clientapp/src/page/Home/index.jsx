import React from 'react'
import Registration from './../../containers/Registration'
import SignIn from './../../containers/SignIn'
import { Redirect } from "react-router-dom";
import isAuthenticated from "./../../service/isAuthenticated"
import "./index.scss"

function Home() {

    const isAuth = isAuthenticated();

    return (
        <div className="homepage">
            {isAuth ? (
                < Redirect to={
                    { pathname: "/Navigation/Players" }
                } />
            ) : (
                    <div className="homepage-item" >
                        <Registration />
                        <SignIn />
                    </div>
                )}
        </div>
    )
}

export default Home