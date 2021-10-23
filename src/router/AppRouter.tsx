import {BrowserRouter as Router} from "react-router-dom";
import {PublicRoute} from "./PublicRoute";
import {StartScreen} from "../components/screens/Start/StartScreen";
import {Redirect} from "react-router";
import {TypeUser} from "../components/screens/TypeUser/TypeUser";
import {LoginScreen} from "../components/screens/Login/LoginScreen";

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <PublicRoute exact path="/start-page" isAuthenticated={false} component={StartScreen} />
                <PublicRoute exact path="/welcome" isAuthenticated={false} component={TypeUser} />
                <PublicRoute exact path="/login" isAuthenticated={false} component={LoginScreen} />

                {/* The root path should be at the end */}
                <PublicRoute exact path="/" isAuthenticated={false} component={TypeUser} />
                <Redirect to="/login" />
            </div>
        </Router>
    )
}
