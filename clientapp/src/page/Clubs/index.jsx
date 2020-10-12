import React, { useEffect, useState } from "react"
import GetAllClubs from "../../api/getAllClubs"
import ClubsUI from "./../../components/ClubsUI"


function Clubs() {
    const [club, setClub] = useState('')

    useEffect(() => {
        GetAllClubs().then(response => {
            setClub(
                response.data
            );
        })
    }, [])

    return (
        <div className="club-page">
            <ClubsUI
                club={club} />
        </div>
    )

}

export default Clubs;