import {AuthActions} from "../reducers/authReducers";

/**
 * Login action
 * @param user User to Login
 */
export const signInAction = (user: any): AuthActions => ({
    type: 'signIn',
    payload: user
});
