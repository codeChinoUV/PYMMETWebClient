import {Redirect, Route} from "react-router";
import React from "react";


interface PublicRouterProps extends React.ComponentProps<any> {
    isAuthenticated: boolean,
    component: React.ComponentProps<any>
}

export const PublicRoute = ({isAuthenticated, component: Component, ...rest}: PublicRouterProps) => {
    return (
        <Route {...rest} component={
            (props: JSX.IntrinsicAttributes & { children?: React.ReactNode }) => (
                (!isAuthenticated)
                    ? <Component {...props} />
                    : <Redirect to="/home"/>
            )
        }/>
    );
}
