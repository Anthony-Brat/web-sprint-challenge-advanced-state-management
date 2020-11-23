import axios from "axios";
export const FETCH_SMURFS = "FETCH_SMURFS";
export const ADD_SMURF = "ADD_SMURF";

export const addSmurf = (smurfData) =>{
    return {
        type: ADD_SMURF,
        payload: smurfData,
    }
}

export const fetchSmurf = () => dispatch =>{
    axios.get("http://localhost:3333/smurfs")
    .then(res =>{
        console.log("fetchSmurf action", res.data)
        dispatch({
            type: FETCH_SMURFS,
            payload: res.data
        })
    })
    .catch(err =>console.log(err.message))
}

export const postNewSmurf = (smurfData) => dispatch =>{
    axios.post("http://localhost:3333/smurfs", smurfData)
    .then(console.log(smurfData))
}
 
axios.post()