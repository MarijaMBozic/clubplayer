import axios from "axios"

function GetPlayerById(Id) {

    return (
        axios.get('https://localhost:44339/api/Player/' + Id).then(res =>
            res
        ).catch(error => {
            console.log(error);
        })
    )
}

export default GetPlayerById;