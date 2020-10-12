import axios from "axios"
import conectionURL from './conectionURL'

const urlClub = conectionURL + "api/Club"

function GetAllClubs() {
    return (
        axios.get(urlClub).then(res =>
            res
        ).catch(error => {
            console.log(error);
        })
    )
}

export default GetAllClubs;