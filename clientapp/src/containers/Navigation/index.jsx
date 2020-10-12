import React from 'react'
import { Redirect } from "react-router-dom";
import isAuthenticated from "./../../service/isAuthenticated"
import NavigationUI from "./../../components/NavigationUI"

function Navigation() {
    const isAuth = isAuthenticated();

    return (
        <div>
            {!isAuth ? (
                < Redirect to={
                    { pathname: "/" }
                } />
            ) : (
                    <div className="navigation-container">
                        <NavigationUI />
                    </div>
                )}
        </div>
    )
}
export default Navigation