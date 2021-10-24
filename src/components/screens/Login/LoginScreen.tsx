import {TextInput} from "../../common/TextInput";
import React, {useState} from "react";
import {makeStyles} from "@mui/styles";
import {Header} from "./Header";

export const LoginScreen = () => {

    const styleClasses = useInternalStyles();

    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');

    return (
        <div>
            <Header/>
            <div>
                <TextInput containerStyles={styleClasses.textInputContainer}
                           fieldName="Correo electronico"
                           value={email}
                           onChange={(v) => setEmail(v)}/>
                <TextInput containerStyles={styleClasses.textInputContainer}
                           fieldName="Contraseña"
                           value={password}
                           isPassword={true}
                           onChange={(v) => setPassword(v)}/>
            </div>
            <div className={styleClasses.buttonsContainer}>
                <button className={styleClasses.buttonLogin}>Iniciar sesión</button>
                <button className={styleClasses.withoutAccount}>No soy cliente</button>
            </div>
        </div>
    )
}

const useInternalStyles = makeStyles(() => ({
    loginContainer: {
        height: "100vh",
        flex: "1",
    },
    formContainer: {
        display: "flex",
        flexDirection: "column"
    },
    buttonsContainer: {
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
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
        width: "200px"
    },
    withoutAccount: {
        backgroundColor: "transparent",
        borderWidth: 0,
        fontWeight: "bold",
        fontSize: "18px",
        lineHeight: "21px",
        letterSpacing: "-0.24px",
        color: "#072146",
        marginTop: "30px",
        width: "200px"
    },
    textInputContainer: {
        margin: "35px 31px"
    }
}));
