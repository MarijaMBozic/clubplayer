import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import GetPlayerById from './../../api/getPlayerById'
import ModalEditUI from "./../../components/ModalEditUI"
import UpdatePlayer from "./../../api/updatePlayer"
import ReactDOM from "react-dom"

function ModalEdit(props) {

    const [playerEdit, setPlayerEdit] = useState({});
    const id = props?.match?.params?.Id;

    useEffect(() => {
        GetPlayerById(id).then(player => {
            setPlayerEdit(player.data)
        })
    }, [id])

    const handleChangeEdit = (fieldEdit) => (e) => {
        e.preventDefault();
        setPlayerEdit({
            ...playerEdit,
            [fieldEdit]: e.target.value
        })
    };

    const handleUpdatePlayer = (e) => {
        e.preventDefault();
        UpdatePlayer(playerEdit);
    }

    return ReactDOM.createPortal(
        <div>
            <ModalEditUI
                handleUpdatePlayer={handleUpdatePlayer}
                handleChangeEdit={handleChangeEdit}
                playerEdit={playerEdit} />
        </div>,
        document.getElementById('modal')
    )
}

export default withRouter(ModalEdit)