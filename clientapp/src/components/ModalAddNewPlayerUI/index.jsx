import React from 'react'
import "./index.scss"

function ModalAddNewPlayerUI(props) {
    const {
        onHidden,
        newPlayer,
        clubs,
        handleChangeNewPlayer,
        handleChangeImage,
        handleSubmitNewPlayer,
        handleselectedClub
    } = props;

    const {
        Fullname,
        YearOfBirth,
        NumOfMatchesForTheClub,
        AveragePoints,
        ClubId
    } = newPlayer;

    const selectClub = clubs.length > 0
        && clubs.map((club, index) => {
            return (
                <option name={club.Name} value={club.Id} key={index} onChange={handleselectedClub("ClubId")} >{club.Name}</option>
            )
        })

    return (
        < div >
            <form onSubmit={handleSubmitNewPlayer}>
                <div className="modal-container">
                    <div className="modalAdd-item">
                        <div className="dataPlayerAdd-item">
                            <div className="item-playerdata-add">
                                <label>Full name </label>
                                <input
                                    type="text"
                                    value={Fullname || ''}
                                    name="Fullname"
                                    onChange={handleChangeNewPlayer("Fullname")}
                                />
                            </div>
                            <div className="item-playerdata-add">
                                <label>Year of birth: </label>
                                <input
                                    type="text"
                                    value={YearOfBirth || ''}
                                    name="YearOfBirth"
                                    onChange={handleChangeNewPlayer("YearOfBirth")}
                                />
                            </div>
                            <div className="item-playerdata-add">
                                <label>Number off matchas for the club: </label>
                                <input
                                    type="text"
                                    value={NumOfMatchesForTheClub || ''}
                                    name="NumOfMatchesForTheClub"
                                    onChange={handleChangeNewPlayer("NumOfMatchesForTheClub")}
                                />
                            </div>
                            <div className="item-playerdata-add">
                                <label>Average points: </label>
                                <input
                                    type="text"
                                    value={AveragePoints || ''}
                                    name="AveragePoints"
                                    onChange={handleChangeNewPlayer("AveragePoints")}
                                />
                            </div>
                            <div className="item-playerdata-add">
                                <label>Club </label>
                                <select
                                    type="text"
                                    value={ClubId}
                                    onChange={handleChangeNewPlayer("ClubId")}
                                >
                                    <option hidden >Select Club</option>
                                    {selectClub}
                                </select>
                            </div>
                            <div className="item-playerdata-add">
                                <input
                                    type="file"
                                    onChange={handleChangeImage('image')} />
                            </div>
                            <div className='btn-closeModalData-add'>
                                <button type="button" className="close-item-add" onClick={onHidden}  >
                                    <p>Quit</p>
                                </button>
                                <button className="close-item-add" type="submit" >
                                    <p>Add</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form >
        </div >
    )
}

export default ModalAddNewPlayerUI