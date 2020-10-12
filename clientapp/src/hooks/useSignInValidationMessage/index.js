
const emailRegex = /^([a-zA-Z0-9_\-\\.]+)@([a-zA-Z0-9_\-\\.]+)\.([a-zA-Z]{2,5})$/
const wordsRegex = /^[A-Za-z0-9\\.]+$/

function useSignInValidationMessage(value) {
    let errors = {};
    if (!value.email) {
        errors.email = '';
    } else if (!emailRegex.test(value.email)) {
        errors.email = 'Username is invalid';
    } else if (value.email.length < 4) {
        errors.email = 'Username is required';
    }

    if (!value.password) {
        errors.password = '';
    } else if (!wordsRegex.test(value.password)) {
        errors.password = 'Password must contain at lest one big leter and special caracters';
    }
    else if (value.password.length > 0 && value.password.length < 8) {
        errors.email = 'Password must contains al least 8 caracters';
    }

    return errors;
};

export default useSignInValidationMessage