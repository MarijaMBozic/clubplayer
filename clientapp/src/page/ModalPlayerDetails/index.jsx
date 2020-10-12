import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import GetPlayerById from './../../api/getPlayerById'
import ModalDetailsUI from "./../../components/ModalDetailsUI"
import ReactDOM from "react-dom"


function ModalPlayerDetails(props) {

    const [playerData, setPlayerData] = useState({});
    const id = props.match.params.Id;

    useEffect(() => {
        GetPlayerById(id).then(player => {
            setPlayerData(player.data)
        })
    }, [id])

    return ReactDOM.createPortal(
        <div>
            <ModalDetailsUI
                playerData={playerData} />
        </div>,
        document.getElementById('modal')
    )
}

export default withRouter(ModalPlayerDetails)