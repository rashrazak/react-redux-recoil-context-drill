import { 
    SET_DATA,
} from "./types";

const reducer = (state, action) => {

    switch (action.type) {
        
        case SET_DATA: {
            return action.name ? { ...state, [action.name]: (action.data instanceof Object && !Array.isArray(action.data)) ? { ...action.data } : action.data } : {...state, ...action.data};
        }
       
        default:
            return state;
    }
}

export default reducer