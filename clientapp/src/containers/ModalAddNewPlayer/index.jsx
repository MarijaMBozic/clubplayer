import React, { useState, useEffect } from 'react'
import ReactDOM from "react-dom"
import ModalAddNewPlayerUI from './../../components/ModalAddNewPlayerUI'
import AddNewPlayer from "./../../api/addNewPlayer"
import GetAllClubs from './../../api/getAllClubs'

function ModalAddNewPlayer(props) {
    const { onHidden } = props;
    const [newPlayer, setNewPlayer] = useState('');
    const [clubs, setClubs] = useState([]);

    useEffect(() => {
        GetAllClubs().then(res => {
            setClubs(
                res.data
            )
        })
    }, [])

    const formData = new FormData();
    formData.append("image", newPlayer.image);
    formData.append("Fullname", newPlayer.Fullname);
    formData.append("YearOfBirth", newPlayer.YearOfBirth);
    formData.append("NumOfMatchesForTheClub", newPlayer.NumOfMatchesForTheClub);
    formData.append("AveragePoints", newPlayer.AveragePoints);
    formData.append("ClubId", newPlayer.ClubId);
    console.log(formData)

    const handleChangeNewPlayer = (fieldNewPlayer) => (e) => {
        setNewPlayer({
            ...newPlayer,
            [fieldNewPlayer]: e.target.value
        })
    }

    const handleChangeImage = (imageFild) => (e) => {
        setNewPlayer({
            ...newPlayer,
            [imageFild]: e.target.files[0]
        })
    }

    const handleSubmitNewPlayer = (e) => {
        e.preventDefault();
        AddNewPlayer(formData)
        onHidden();
    }

    const handleselectedClub = (selectedFiled) => (e) => {
        setClubs({
            ...selectedFiled,
            [selectedFiled]: e.target.name
        })
    }

    return ReactDOM.createPortal(
        <div>
            <ModalAddNewPlayerUI
                onHidden={onHidden}
                newPlayer={newPlayer}
                clubs={clubs}
                handleChangeNewPlayer={handleChangeNewPlayer}
                handleChangeImage={handleChangeImage}
                handleSubmitNewPlayer={handleSubmitNewPlayer}
                handleselectedClub={handleselectedClub}
            />
        </div>,
        document.getElementById('modal')
    )
}

export default ModalAddNewPlayer