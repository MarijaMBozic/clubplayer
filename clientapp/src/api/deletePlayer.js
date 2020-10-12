import axios from "axios";
import conectionURL from './conectionURL'

const urlPlayer = conectionURL + "/api/Player/"

export const DeletePlayer = (PlayerId) => {
    const conectionUrlDelete = urlPlayer + PlayerId;
    return (
        axios.delete(conectionUrlDelete).then(response => {

            alert("Successful delete");

        }).catch(error => {
            console.log(error);
        })
    )
}




