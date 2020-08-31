
const initialState ={
    smurfs: []
}

export const reducer = (state =initialState, action) => {
    switch (action.type){
        case ADD_SMURF:
            return {
                ...state,
            }
        case FETCH_SMURFS:
            return {
                ...state, smurfs: action.payload
            }         
            default:
                return state;
    }
}