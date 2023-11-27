import { legacy_createStore as createStore } from 'redux';

// le state 
const initialState = {
    token:"", 
}

// les actions
export const myAction = (data) => ({type:"LOGIN",payload: {token: data.body.token}})

// le reducer
function reducer(state = initialState,action) {

    switch (action.type) { 
        case 'LOGIN':
           return {
              ...state,
              token: action.payload.token
           };
        case 'LOGOUT':
           return initialState;
        default:
           return state;
     }
}

//creer le store
export const store = createStore(reducer);