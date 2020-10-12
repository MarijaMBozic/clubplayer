import axios from "axios"
import conectionURL from './conectionURL'
import qs from 'qs';

const connUrl = conectionURL + "api/Search"

function GetBySearch(props) {
    const reqData = qs.stringify(props);

    console.log(reqData)
    return (
        axios.post(connUrl, reqData).then(response =>
            response
        ).catch(error => {
            console.log(error);
        })
    )
}

export default GetBySearch;