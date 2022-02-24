import React, { createContext, useReducer, useEffect, useState } from "react";
import reducer from "./reducers";
import initialState from "./state";
import { useActions } from "./actions";


const General = createContext(initialState);

const Provider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState);
    const actions = useActions(state, dispatch);

    useEffect(() => {
        console.log({  state })
    }, [state]);

    
    return (
        <General.Provider value={{state, dispatch, actions}}>
        {children}
       
        </General.Provider>
    )
}

export { 
    Provider as default,
    General
};

