import React from 'react'
import GetImageClub from './../../api/getImageClub'
import "./index.scss"

function ClubsUI(props) {
    const {
        club
    } = props;

    return (
        <div>
            {
                club ?
                    (club.map((clubs) => {
                        const {
                            Id,
                            Name,
                            League,
                            YearClubWasFounded,
                            NumOfWonTropheis
                        } = clubs

                        const getClubPhoto = GetImageClub(Id);
                        return (
                            <div className="container-club" key={Id}>
                                <div className="club-container" >
                                    <div className="image-Item-club">
                                        <img src={getClubPhoto} alt={Name} />
                                    </div>
                                    <div className="dataClubDetails-item">
                                        <div className="item-club-data">
                                            <h1>{Name}</h1>

                                            <div className="item-club-data">
                                                <label>League: </label>
                                                <p>{League}</p>
                                            </div>
                                            <div className="item-club-data">
                                                <label>Year of founding the club: </label>
                                                <p>{YearClubWasFounded}</p>
                                            </div>
                                            <div className="item-club-data">
                                                <label>Number Of Won Tropheis: </label>
                                                <p>{NumOfWonTropheis}</p>
                                            </div>
                                        </div>
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

export default ClubsUI