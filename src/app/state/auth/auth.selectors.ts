import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Auth } from "src/app/interfaces/auth.model";


export const selectAuthState = createFeatureSelector<Auth>('auth')

export const selectAuth = createSelector(selectAuthState, (state) => state);
