import axios from 'axios';
import conectionURL from './conectionURL'

const connUrlReg = conectionURL + "api/Account/Register";

function Registrationapi(props) {

    return (
        axios.post(connUrlReg, props).then(response => {
            window.location.reload();
            alert("Successful registration")
        }).catch(error => {
            console.log(error);
        })
    )
}

export default Registrationapi
