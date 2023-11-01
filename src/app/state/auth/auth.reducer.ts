import { createReducer, on } from '@ngrx/store';
import { Auth } from 'src/app/interfaces/auth.model';
import { AuthActions, AuthLogout } from './auth.action';

const initialState : Auth = {
    isAuth : false,
    jwt : "",
    username: "",
    roles : ""
}

export const authReducer =  createReducer(initialState,

    on(AuthActions.setAuthParams, (state, {auth})=>{
        state = auth
        return state
    }),

    on(AuthLogout, (state)=>{
        let newAuthState: Auth

        newAuthState = {
            isAuth : false,
            jwt : "",
            username: "",
            roles : ""
        }

        return newAuthState

    })

    )