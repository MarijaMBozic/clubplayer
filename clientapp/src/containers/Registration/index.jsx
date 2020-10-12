import React, { useState } from 'react'
import useValidationField from '../../hooks/useValidationField'
import Registrationapi from './../../api/Registrationapi'
import RegistrationUI from './../../components/RegistrationUI'
import errors from './../../hooks/UseRegistrationValidationMessage'

function Registration(props) {
    const [registrationData, setRegistrationData] = useState({});
    const regIsValid = useValidationField(registrationData)
    const errorMessage = errors(registrationData);

    const handleChange = (fieldname) => (e) => {
        setRegistrationData({
            ...registrationData,
            [fieldname]: e.target.value
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (regIsValid) {
            Registrationapi(registrationData)
            setRegistrationData({})
        }
    }

    return (
        <RegistrationUI
            registrationData={registrationData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            regIsValid={regIsValid}
            errorMessage={errorMessage}
        />
    )
}

export default Registration;



