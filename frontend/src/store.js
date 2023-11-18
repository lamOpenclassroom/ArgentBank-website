import { legacy_createStore as createStore } from 'redux';

// le state 
const initialState = {
    email:"tony@stark.com",
    connexion: true,
}

// les actions
export const connexionUser = () => ({ type: "userConnect" })

// le reducer
function reducer(state = initialState,action) {

    if (action.type === "userConnect") {
        return {
            ...state,
            connexion: !state.connexion,
        }
    }
    return state;
}

//creer le store
export const store = createStore(reducer);