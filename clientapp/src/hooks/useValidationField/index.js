import { useState, useEffect } from "react";

const emailRegex = /^([a-zA-Z0-9_\-\\.]+)@([a-zA-Z0-9_\-\\.]+)\.([a-zA-Z]{2,5})$/
const wordsRegex = /^[A-Za-z0-9\\.]+$/

function useValidationField(value) {
    const [isvalid, setIsValid] = useState(true);

    useEffect(() => {
        emailRegex.test(value.email) &&
            wordsRegex.test(value.password) &&
            value.confirmpassword === value.password ?
            setIsValid(true) : setIsValid(false)
    }, [value])

    return isvalid
}

export default useValidationField