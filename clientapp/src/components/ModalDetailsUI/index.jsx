
import React from 'react'
import { NavLink } from 'react-router-dom'

import GetImage from "./../../api/getImage"


import "./index.scss"

function ModalDetailsUI({ playerData }) {
    const {
        Id,
        Fullname,
        YearOfBirth,
        NumOfMatchesForTheClub,
        AveragePoints
    } = playerData

    return (
        <div className="modal-container">
            <div className="modal-item">
                <div className="imagePlayerDetails-item">
                    <img src={GetImage(Id)} alt={Fullname} />
                </div>
                <div className="dataPlayerDetails-item">
                    <div className="item-playerdata">
                        <h1>{Fullname}</h1>
                    </div>
                    <div className="item-playerdata">
                        <label>Year of birth: </label>
                        <p>{YearOfBirth}</p>
                    </div>
                    <div className="item-playerdata">
                        <label>Number off matchas for the club: </label>
                        <p>{NumOfMatchesForTheClub}</p>
                    </div>
                    <div className="item-playerdata">
                        <label>Average points: </label>
                        <p>{AveragePoints}</p>
                    </div>
                    <div className='btn-closeModalData'>
                        <NavLink className="close-item" exact to={`/navigation/players`}>
                            Close
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalDetailsUI