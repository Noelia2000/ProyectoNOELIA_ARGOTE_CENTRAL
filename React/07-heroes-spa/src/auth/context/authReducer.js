import { types } from "../types/types";


export const authReducer = (state = {}, action) =>{

    switch (action.type) {
        case types.login:
            return{
                ...state,//si es que temos para propiedades en nuestro estado
                logged: true,
                user: action.payload
            }
        
        case types.logout:
            return{
                logged: false,
                
            }

        default:
            return state;
    }

}