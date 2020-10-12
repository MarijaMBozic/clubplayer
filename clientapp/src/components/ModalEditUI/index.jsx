import React from 'react'
import { NavLink } from 'react-router-dom'
import GetImage from "./../../api/getImage"

import "./index.scss"

function ModalEditUI({ playerEdit, handleChangeEdit, handleUpdatePlayer }) {
    const {
        Id,
        Fullname,
        YearOfBirth,
        NumOfMatchesForTheClub,
        AveragePoints
    } = playerEdit

    const getPhoto = GetImage(Id);
    console.log(Id)

    return (
        <div>
            <form onSubmit={handleUpdatePlayer}>
                <div className="modal-container">
                    <div className="modal-item">
                        <div className="imagePlayerDetails-item">
                            <img src={getPhoto} alt={Fullname} />
                        </div>
                        <div className="dataPlayerDetails-item">
                            <div className="item-playerdata-edit">
                                <label>Full name </label>
                                <input
                                    type="text"
                                    value={`${Fullname}`}
                                    onChange={handleChangeEdit("Fullname")}
                                />
                            </div>
                            <div className="item-playerdata-edit">
                                <label>Year of birth: </label>
                                <input
                                    type="text"
                                    value={`${YearOfBirth}`}
                                    onChange={handleChangeEdit("YearOfBirth")}
                                />
                            </div>
                            <div className="item-playerdata-edit">
                                <label>Number off matchas for the club: </label>
                                <input
                                    type="text"
                                    value={`${NumOfMatchesForTheClub}`}
                                    onChange={handleChangeEdit("NumOfMatchesForTheClub")}
                                />
                            </div>
                            <div className="item-playerdata-edit">
                                <label>Average points: </label>
                                <input
                                    type="text"
                                    value={`${AveragePoints}`}
                                    onChange={handleChangeEdit("AveragePoints")}
                                />
                            </div>
                            <div className='btn-closeModalData-edit'>
                                <button type="button" className="close-item-edit"  >
                                    <NavLink className="edit-navLink" exact to={`/navigation/players`}>
                                        Close
                                    </NavLink>
                                </button>
                                <button className="close-item-edit" type="submit">
                                    <NavLink className="edit-navLink" exact to={`/navigation/players`}>
                                        Save
                                    </NavLink>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ModalEditUI