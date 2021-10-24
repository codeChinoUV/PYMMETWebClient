import React from "react";
import {makeStyles} from "@mui/styles";
import {useHistory} from "react-router-dom";

export const TypeUser = () => {
    const styleClasses = useInternalStyles();
    const history = useHistory();

    const register = () => {
        history.push('/register');
    }

    const logIn = () => {
        history.push('/login');
    }

    return (
        <div className={styleClasses.loginContainer}>
            <div className={styleClasses.imgContainer}>
                <img className={styleClasses.imgLogo} src="/assets/LogoPYMEET.gif" alt="Logo"/>
            </div>
            <div className={styleClasses.buttonsContainer}>
                <p className={styleClasses.welcomeText}>¡Te damos la bienvenida a tu nueva
                    aplicación para PYMES!</p>
                <button className={styleClasses.buttonLogin} onClick={logIn}>Iniciar sesión</button>
                <button className={styleClasses.withoutAccount} onClick={register}>No soy cliente</button>
            </div>
        </div>
    )
}

const useInternalStyles = makeStyles(() => ({
    loginContainer: {
        height: "100vh",
        backgroundColor: "#072146"
    },
    imgContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "35vh"
    },
    imgLogo: {
        width: "150px",
        height: "203px"
    },
    welcomeText: {
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "18px",
        lineHeight: "21px",
        textAlign: "center",
        fontFeatureSettings: 'zero on',
        color: "#074EA5",
    },
    buttonsContainer: {
        height: "65vh",
        background: "#FFFFFF",
        boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius: "53px 53px 0 0",
        padding: "22% 10% 10% 10%",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column"
    },
    buttonLogin: {
        backgroundColor: "#072146",
        border: "2px solid #072146",
        boxSizing: "border-box",
        borderRadius: "6px",
        color: "white",
        borderWidth: 0,
        padding: "18px 0",
        fontWeight: 900,
        fontSize: "14px",
        lineHeight: "16px",
        letterSpacing: "0.04em",
        textTransform: "uppercase",
        marginTop: "120px",
    },
    withoutAccount: {
        backgroundColor: "transparent",
        borderWidth: 0,
        fontWeight: "bold",
        fontSize: "18px",
        lineHeight: "21px",
        letterSpacing: "-0.24px",
        color: "#072146",
        marginTop: "30px"
    }
}));
