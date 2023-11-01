import { createFeatureSelector } from "@ngrx/store";
import { Auth } from "src/app/interfaces/auth.model";


export const authState = createFeatureSelector<Auth>('auth')