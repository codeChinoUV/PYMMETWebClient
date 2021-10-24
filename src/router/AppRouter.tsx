import {BrowserRouter as Router} from "react-router-dom";
import {PublicRoute} from "./PublicRoute";
import {StartScreen} from "../components/screens/Start/StartScreen";
import {Redirect} from "react-router";
import {TypeUser} from "../components/screens/TypeUser/TypeUser";
import {LoginScreen} from "../components/screens/Login/LoginScreen";
import {StartRegisterScreen} from "../components/screens/StartRegister/StartRegisterScreen";
import {FirstFormRegister} from "../components/screens/FirstFormRegister/FirstFormRegister";
import {SecondFormRegister} from "../components/screens/SecondFormRegister/SecondFormRegister";
import {ThirdFormRegister} from "../components/screens/ThirdFormRegister/ThirdFormRegister";
import {ForthFormRegister} from "../components/screens/ForthFormRegister/ForthFormRegister";

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <PublicRoute exact path="/start-page" isAuthenticated={false} component={StartScreen} />
                <PublicRoute exact path="/welcome" isAuthenticated={false} component={TypeUser} />
                <PublicRoute exact path="/login" isAuthenticated={false} component={LoginScreen} />
                <PublicRoute exact path="/register" isAuthenticated={false} component={StartRegisterScreen} />
                <PublicRoute exact path="/register/form/1" isAuthenticated={false} component={FirstFormRegister} />
                <PublicRoute exact path="/register/form/2" isAuthenticated={false} component={SecondFormRegister} />
                <PublicRoute exact path="/register/form/3" isAuthenticated={false} component={ThirdFormRegister} />
                <PublicRoute exact path="/register/form/4" isAuthenticated={false} component={ForthFormRegister} />

                {/* The root path should be at the end */}
                <PublicRoute exact path="/" isAuthenticated={false} component={TypeUser} />
                <Redirect to="/register/form/1" />
            </div>
        </Router>
    )
}
