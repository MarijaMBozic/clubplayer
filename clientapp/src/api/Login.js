import axios from 'axios';
import qs from 'qs';
import conectionURL from './conectionURL'

const conectionUrl = conectionURL + "Token";

const config = {
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    }
};

function Login(props) {
    const reqData = qs.stringify(props);

    return (
        axios.post(conectionUrl, reqData, config)
            .then(response => {
                localStorage.setItem("token", response.data.access_token);
                window.location.reload();
                alert("Successful login")
            })
            .catch(error => {
                console.log(error);
            })
    )
}
export default Login;