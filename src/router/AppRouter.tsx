import {BrowserRouter as Router} from "react-router-dom";
import {PublicRoute} from "./PublicRoute";
import {StartScreen} from "../components/screens/start/StartScreen";
import {Redirect} from "react-router";

import { RegisterHelp } from "../components/screens/RegisterInfo/RegisterHelp";
import { RegisterCosts } from "../components/screens/RegisterInfo/RegisterCosts";
import { RegisterOpening } from "../components/screens/RegisterInfo/RegisterOpening";

export const AppRouter = () => {
    return (
            <TransitionGroup>
                <CSSTransition
                    timeout={300}
                    classNames='fade'
                    key={location.key}
                >
                    <div>
                        <Switch location={location}>
                            <PublicRoute exact path="/start-page" isAuthenticated={false} component={StartScreen}/>
                            <PublicRoute exact path="/welcome" isAuthenticated={false} component={TypeUser}/>
                            <PublicRoute exact path="/login" isAuthenticated={false} component={LoginScreen}/>
                            <PublicRoute exact path="/register" isAuthenticated={false}
                                         component={StartRegisterScreen}/>
                            <PublicRoute exact path="/register/form/1" isAuthenticated={false}
                                         component={FirstFormRegister}/>
                            <PublicRoute exact path="/register/form/2" isAuthenticated={false}
                                         component={SecondFormRegister}/>
                            <PublicRoute exact path="/register/form/3" isAuthenticated={false}
                                         component={ThirdFormRegister}/>
                            <PublicRoute exact path="/register/form/4" isAuthenticated={false}
                                         component={ForthFormRegister}/>
                            <PublicRoute exact path="/register/form/5" isAuthenticated={false}
                                         component={FiveFormRegister}/>
                            <PublicRoute exact path="/register/form/6" isAuthenticated={false}
                                         component={SixFormRegister}/>
                            <PublicRoute exact path="/register/form/7" isAuthenticated={false}
                                         component={SignatureForm}/>
                            <PublicRoute exact path="/register/form/end" isAuthenticated={false}
                                         component={RegisterComplete}/>
                            <PublicRoute exact path="/register/help" isAuthenticated={false} component={RegisterHelp} />
                            <PublicRoute exact path="/register/costs" isAuthenticated={false} component={RegisterCosts} />
                            <PublicRoute exact path="/register/opening" isAuthenticated={false} component={RegisterOpening} />

                {/* The root path should be at the end */}
                <PublicRoute exact path="/" isAuthenticated={false} component={StartScreen} />
                <Redirect to="/" />
            </div>
        </Router>
    )
}
