import {Redirect, Route} from "react-router";
import React from "react";


interface PrivateRouteProps extends React.ComponentProps<any>{
    isAuthenticated: boolean,
    component: React.ComponentProps<any>
}

export const PrivateRoute = ({isAuthenticated, component: Component, ...rest}: PrivateRouteProps) => {
    return (
        <Route {...rest} component={
            (props: JSX.IntrinsicAttributes & { children?: React.ReactNode }) => (
                (!isAuthenticated)
                    ? <Redirect to="/login" />
                    : <Component {...props} />
            )
        }/>
    );
}
