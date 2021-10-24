import {Header} from "./Header";
import React, {useState} from "react";
import {TextInput} from "../../common/TextInput";
import {makeStyles} from "@mui/styles";
import {CheckBox} from "../../common/CheckBox";
import {SelectOption} from "../../common/SelectOption";

const authenticationsOptions: string[] =['Huella digital', 'Mensaje SMS', 'Correo electronico' ];

const countriesOptions: string[] = ['México', 'Colombia', 'Otro'];


export const StartRegisterScreen = () => {

    const styleClass = useInternalStyles();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [authenticationOption, setAuthenticationOption] = useState('');
    const [country, setCountry] = useState('');
    const [agreeLicense, setAgreeLicense] = useState(true);
    return (
        <div className={styleClass.screenContainer}>
            <div>
                <Header />
                <div>
                    <TextInput fieldName="Correo electrónico empresarial"
                               containerStyles={styleClass.textInputContainer}
                               onChange={(v) => setEmail(v) }
                               placeHolder="jane@example.com"
                               value={email} />
                    <TextInput fieldName="Contraseña"
                               containerStyles={styleClass.textInputContainer}
                               onChange={(v) => setPassword(v) }
                               isPassword={true}
                               placeHolder="Ingresa la contraseña"
                               value={password} />
                    <TextInput fieldName="Repita la contraseña"
                               containerStyles={styleClass.textInputContainer}
                               onChange={(v) => setRepeatPassword(v)}
                               value={repeatPassword}
                               placeHolder="Repite la contraseña"
                               isPassword={true}  />
                    <SelectOption fieldName="Opciones de autenticación"
                                  label="Opciones de autenticación"
                                  placeHolder="Selecciona una opción"
                                  containerStyles={styleClass.textInputContainer}
                                  onChange={(v) => setAuthenticationOption(v)}
                                  values={authenticationsOptions}
                                  value={authenticationOption}/>
                    <SelectOption fieldName="País de procedencia"
                                  label="País de procedencia"
                                  placeHolder="Selecciona un país "
                                  containerStyles={styleClass.textInputContainer}
                                  onChange={(v) => setCountry(v)}
                                  values={countriesOptions}
                                  value={country}/>
                    <CheckBox fieldName="Acepto los terminos y condiciones"
                              onChange={(e) =>setAgreeLicense(!e)}
                              containerStyles={styleClass.textInputContainer}
                              selected={agreeLicense} />
                </div>
            </div>
            <div className={styleClass.buttonsContainer}>
                <button className={styleClass.buttonLogin}>Abrir mi cuenta</button>
                <button className={styleClass.withoutAccount}>Iniciar sesión</button>
            </div>
        </div>
    )
}

const useInternalStyles = makeStyles(() => ({
    screenContainer:{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        overflowY: "scroll"
    },
    textInputContainer: {
        margin: "20px 31px"
    },
    buttonsContainer: {
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
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
        marginTop: "20px",
        width: "200px"
    },
}));
