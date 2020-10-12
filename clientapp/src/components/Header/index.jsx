import React from "react"
import { Route, NavLink } from "react-router-dom"
import Players from "./../../page/Players"
import Clubs from "./../../page/Clubs"
import Statistic from "./../../page/Statistic"
import ModalPlayerDetails from "./../../page/ModalPlayerDetails"
import ModalEdit from "./../../page/ModalEdit"
import Search from "./../../containers/Search"
import "./index.scss"


function Header() {

    const handleLogOut = () => {
        localStorage.removeItem("token");
        window.location.reload();
    }
    return (
        <div className="main-page">
            <header className="header">
                <NavLink className="header-item" activeClassName="activHeader-item" to="/navigation/players">PLAYERS</NavLink>
                <NavLink className="header-item" activeClassName="activHeader-item" to="/navigation/clubs">CLUBS</NavLink>
                <NavLink className="header-item" activeClassName="activHeader-item" to="/navigation/statistic">STATISTIC</NavLink>
                <div className="header-item-search"><Search /></div>
                <button onClick={handleLogOut} >LogOut</button>
            </header>
            <div className="page-item">
                <Route exact path="/navigation/players"
                    component={Players} />
                <Route exact path="/navigation/clubs"
                    component={Clubs} />
                <Route exact path="/navigation/statistic"
                    component={Statistic} />
                <Route exact path="/navigation/players/:Id" component={ModalPlayerDetails} />
                <Route exact path="/navigation/players/edit/:Id" component={ModalEdit} />
            </div>
        </div>
    )
}

export default Header;