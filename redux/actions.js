import { SET_ERROR_DIALOG, SET_DATA, IS_LOADING, SET_SUCCESS_DIALOG} from "./types";

const actions =  {
    
    setData: (data, name) => {
        return dispatch => dispatch({ type: SET_DATA, data, name });
    },
   
}

export default actions

