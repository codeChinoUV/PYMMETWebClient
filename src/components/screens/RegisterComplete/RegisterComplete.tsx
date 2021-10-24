import {TitleRegister} from "../../common/TitleRegister";
import {Stepper} from "../../common/Stepper";
import React from "react";
import {makeStyles} from "@mui/styles";
import {useHistory} from "react-router-dom";

export const RegisterComplete = () => {
    const styleClass = useInternalStyles();

    const history = useHistory();

    const goHome = () => {
        history.push('/start-page');
    }

    return (
        <div className={styleClass.screenContainer}>
            <div>
                <div>
                    <TitleRegister/>
                    <Stepper totalSteps={7}
                             currentStep={8}
                             containerStyles={styleClass.stepperContainer}
                             basePathSteps="/register/form/"/>
                </div>
                <div className={styleClass.messageContainer}>
                    <h1 className={styleClass.title}>¡FELICITACIONES!</h1>
                    <p className={styleClass.text}>Has terminado tu solicitud
                        de registro a PYMEET,
                        esta se encuentra en
                        proceso de revisión.
                    </p>
                    <p className={styleClass.text}>En breve te notificaremos
                        la respuesta, mientras tanto
                        puedes relajarte.
                    </p>
                </div>
                <img className={styleClass.celebration} src="/assets/confetti.gif" alt=""/>
            </div>
            <div className={styleClass.buttonCloseContainer}>
                <button className={styleClass.nextButton} onClick={goHome}>Cerrar</button>
            </div>
        </div>

    )
}

const useInternalStyles = makeStyles(() => ({
    screenContainer: {
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        overflowY: "scroll"
    },
    stepperContainer: {
        margin: "15px 35px"
    },
    messageContainer: {
        position: "relative",
        marginTop: "80px",
        boxSizing: "border-box"
    },
    title: {
        fontFamily: "Inter",
        fontWeight: "bold",
        fontSize: "28px",
        lineHeight: "44px",
        fontFeatureSettings: "'zero' on",
        color: "#072146",
        textAlign: "center"
    },
    text: {
        marginLeft: "60px",
        marginRight: "60px",
        fontFamily: "Inter",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "20px",
        lineHeight: "29px",
        textAlign: "center",
        fontFeatureSettings: "'zero' on",
        color: "#072146",
        marginBottom: "20px"
    },
    containerElements: {
        margin: "20px 25px"
    },
    celebration: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        zIndex: -2
    },
    buttonCloseContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "20px"
    },
    nextButton: {
        marginLeft: "15px",
        background: "#072146",
        border: "2px solid #072146",
        boxSizing: "border-box",
        borderRadius: "6px",
        padding: "19px 35px",
        fontWeight: 900,
        fontSize: "14px",
        lineHeight: "16px",
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        letterSpacing: "0.04em",
        textTransform: "uppercase",
        color: "white",
        filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
    },
}));
