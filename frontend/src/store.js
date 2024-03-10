import { legacy_createStore as createStore } from 'redux';

// le state 
const initialState = {
   token: "",
   username: "",
   firstname: "",
   lastname: "",
   showEdit: true,
   checkIt: true,
}

// les actions
export const myAction = (data) => ({ type: "LOGIN", payload: { token: data.body.token } })
export const myActionEdit = () => ({ type: "EDIT" })
export const rememberCheck = () => ({ type: "CHECKIT"}) 

// le reducer
function reducer(state = initialState,action) {
    switch (action.type) { 
       case 'LOGIN':
         return {
            ...state,
            token: action.payload.token,
         } 
       
         case 'DEFIN_USERNAME':
         return {
            ...state,
            username: action.payload.username,
            firstname: action.payload.firstname,
            lastname: action.payload.lastname
         };
         
         case 'EDIT':
            return {
            ...state,
            showEdit: !state.showEdit,
         }
       
         case 'CHECKIT':
         return {
            ...state,
            checkIt: !state.checkIt,
            }
       
         case 'LOGOUT':
          return {
             ...state,
             token: "",
          };
         
         default:
           return state;
     }
}

//creer le store
export const store = createStore(reducer);

 if (localStorage.getItem("mytoken") != null) {
    initialState.token = localStorage.getItem("mytoken")
} else {
    initialState.token = localStorage.removeItem("mytoken");
}