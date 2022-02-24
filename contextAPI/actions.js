import { SET_ERROR_DIALOG, SET_DATA, IS_LOADING, SET_SUCCESS_DIALOG} from "./types";


export const useActions = (state, dispatch) => {

    const actions = {
        setLoading:  (data) => {
            dispatch({ type: IS_LOADING, data });
          },
        setErrorDialog: (data) => {
            dispatch({ type: SET_ERROR_DIALOG, data });
        },
        setSuccessDialog: (data) => {
            dispatch({ type: SET_SUCCESS_DIALOG, data });
        },
        setData: (data, name) => {
            dispatch({ type: SET_DATA, data, name });
        },
    }

    return actions;
}