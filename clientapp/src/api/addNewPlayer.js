import axios from "axios";
import conectionURL from './conectionURL'

const urlPlayer = conectionURL + "api/Player"

const config = {
    headers: {
        "content-type": "multipart/form-data"
    }
}
function AddNewPlayer(formData) {    
    return (
        axios.post(urlPlayer, formData, config).then(
            res => {
                console.log(res.data)
                alert("New player save successfuly")
            }
        )
    )
}
export default AddNewPlayer