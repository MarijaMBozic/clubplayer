import React from 'react'
import GetImage from './../../api/getImage'
import { NavLink } from "react-router-dom"
import "./index.scss"

function PlayersUI(props) {
    const {
        players,
        handleDeletePlayer
    } = props;

    return (
        <div>
            {
                players ?
                    (players.map((player) => {
                        const {
                            Id,
                            Fullname
                        } = player
                        return (
                            <div className="container" key={Id}>
                                <div className="players-container" >
                                    <button type="button" className="btn-delete" onClick={handleDeletePlayer(Id)} >
                                        x
                                </button>
                                    <div className="image-Item">
                                        <img src={GetImage(Id)} alt={Fullname} />
                                    </div>
                                    <h1>{Fullname}</h1>
                                    <br />
                                    <div className="btn-item">
                                        <button>
                                            <NavLink className="btn-plyersData-item" exact to={`/navigation/players/${Id}`}>
                                                Details
                                        </NavLink>
                                        </button>
                                        <button className="btn-open-Modal">
                                            <NavLink className="btn-plyersData-item" exact to={`/navigation/players/edit/${Id}`}>
                                                Edit
                                        </NavLink>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    })) : (
                        <div>
                            loading...
                        </div>
                    )
            }
        </div>
    )
}

export default PlayersUI