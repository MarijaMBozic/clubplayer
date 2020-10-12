import axios from 'axios';
import conectionURL from './conectionURL'

function UpdatePlayer(props) {
    const {
        Id
    } = props;
    console.log = (props)

    const conectionUrlEdit = conectionURL + "api/Player/" + Id;

    return (
        axios.put(conectionUrlEdit, props).then(response => {
            window.location.reload();
            alert("Successful update");
        }).catch(error => {
            console.log(error);
        })
    )
}

export default UpdatePlayer