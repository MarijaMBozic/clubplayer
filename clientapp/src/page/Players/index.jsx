import React, { useEffect, useState } from "react"
import GetPlayers from "../../api/getAllPlayers"
import ModalAddNewPlayer from "./../../containers/ModalAddNewPlayer"
import addPlayer from "./../../images/addPlayer.png"
import { DeletePlayer } from "../../api/deletePlayer"
import PlayersUI from './../../components/PlayersUI'
import "./index.scss"

function Players(props) {
    const [players, setPlayers] = useState([])
    const [isHiddenModal, setIsHiddenModal] = useState(true)
    /*const {
        searchedPlayers
    } = props;
        console.log("podaci iz searcha: ", searchedPlayers)*/

    useEffect(() => {
        if ([...players].length === 0 || ([...players].length !== players.length)) {
            GetPlayers().then(response => {
                setPlayers(
                    response.data
                );
            })
        }
    })

    const handleOpanModal = () => {
        setIsHiddenModal(false)
    }

    const onHidden = () => {
        setIsHiddenModal(true)
    }

    const handleDeletePlayer = (playerId) => (e) => {
        e.preventDefault();
        DeletePlayer(playerId);
    }

    return (
        <div className="player-page">
            <button className="btn-openModalAdd" onClick={handleOpanModal}>
                <img src={addPlayer} alt="Add new player" />
            </button>
            {
                !isHiddenModal ? (
                    <ModalAddNewPlayer
                        onHidden={onHidden}
                    />) : ""
            }
            <div className="container-list" >
                <PlayersUI
                    players={players}
                    handleDeletePlayer={handleDeletePlayer} />
            </div>
        </div>
    )

}

export default Players;