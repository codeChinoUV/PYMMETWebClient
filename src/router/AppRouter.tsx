import {BrowserRouter as Router} from "react-router-dom";
import {PublicRoute} from "./PublicRoute";
import {StartScreen} from "../components/screens/start/StartScreen";
import {Redirect} from "react-router";

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <PublicRoute exact path="/start-page" isAuthenticated={false} component={StartScreen} />

                {/* The root path should be at the end */}
                <PublicRoute exact path="/" isAuthenticated={false} component={StartScreen} />
                <Redirect to="/" />
            </div>
        </Router>
    )
}
