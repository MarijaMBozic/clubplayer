import axios from "axios"
import conectionURL from './conectionURL'

const urlPlayers = conectionURL + 'api/Player';

function GetPlayers() {

    return (
        axios.get(urlPlayers).then(res =>
            res
        ).catch(error => {
            console.log(error);
        })
    )
}

export default GetPlayers;