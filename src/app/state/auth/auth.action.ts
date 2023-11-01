import { createAction, createActionGroup, props } from "@ngrx/store";
import { Auth } from "src/app/interfaces/auth.model";

export const AuthActions = createActionGroup({
    source: 'Auth API',
    events: {
      'Set Auth Params': props<{auth: Auth}>()
    },
  });

export const AuthLogout = createAction('Auth Logout')
