/**
 * Custom actions for auth reduces
 */
export type AuthActions =
    | { type: 'signIn', payload: any }
    | { type: 'signOut', payload: any }

/**
 * Interface of Auth reducer state
 */
export interface IAuthReducerState {
    loggedIn: boolean,
    user: any
}

/**
 * Initial state of reducer
 */
const initialState: IAuthReducerState = {
    loggedIn: false,
    user: null
}

export const authReducer = (state = initialState, action: AuthActions) => {
    switch (action.type){
        case "signIn":
            /**
             * Modify to action to do
             */
            return state;
        case "signOut":
            /**
             * Modify to action to do
             */
            return state;
        default:
            return state;
    }
}
