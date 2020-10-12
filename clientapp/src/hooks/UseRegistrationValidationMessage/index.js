
const emailRegex = /^([a-zA-Z0-9_\-\\.]+)@([a-zA-Z0-9_\-\\.]+)\.([a-zA-Z]{2,5})$/
const wordsRegex = /^[A-Za-z0-9\\.]+$/

function useRegistrationValidationMessage(value) {
    let errors = {};
    if (!value.email) {
        errors.email = '';
    } else if (!emailRegex.test(value.email)) {
        errors.email = 'Email address is invalid';
    } else if (value.email.length < 4) {
        errors.email = 'Email is required';
    }

    if (!value.password) {
        errors.password = '';
    } else if (!wordsRegex.test(value.password)) {
        errors.password = 'Password must contain at lest one big leter and special caracters';
    }
    else if (value.password.length > 0 && value.password.length < 8) {
        errors.email = 'Password must contains al least 8 caracters';
    }

    if (!value.confirmpassword) {
        errors.confirmpassword = '';
    } else if (value.confirmpassword !== value.password) {
        errors.password = 'Confirm password is difrent from password';
    }
    return errors;
};

export default useRegistrationValidationMessage