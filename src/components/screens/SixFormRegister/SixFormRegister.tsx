import {ButtonsForm} from "../../common/ButonsForm";
import {makeStyles} from "@mui/styles";
import {TitleRegister} from "../../common/TitleRegister";
import {Stepper} from "../../common/Stepper";
import React, {useState} from "react";
import {CheckBox} from "../../common/CheckBox";
import {useHistory} from "react-router-dom";

export const SixFormRegister = () => {
    const styleClass = useInternalStyles();

    const history = useHistory();

    const nextPage = () => {
        history.push('/register/form/7');
    }

    const goHome = () => {
        history.push('/start-page');
    }

    const [contractElectronicBank, setContractElectronicBank] = useState(false);
    const [internetBank, setInternetBank] = useState(false);
    const [businessAccount, setBusinessAccount] = useState(false);

    return (
        <div className={styleClass.screenContainer}>
            <div>
                <TitleRegister/>
                <Stepper totalSteps={6}
                         currentStep={6}
                         containerStyles={styleClass.stepperContainer}
                         basePathSteps="/register/form/"/>
                <div className={styleClass.containerElements}>
                    <p className={styleClass.subtitle}>Información importante de contratación</p>
                    <p className={styleClass.text}>Esta información te brinda todo lo relevante a la contratación de la
                        cuenta para tu PYME.</p>
                </div>
                <div className={styleClass.containerElements}>
                    <p className={styleClass.contractDetails}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam eget nisi blandit,
                        sollicitudin velit venenatis, fringilla sem. Nam ut placerat justo. Donec odio nunc,
                        scelerisque id metus eu, egestas accumsan erat. Nullam accumsan auctor interdum. Ut ac
                        sapien sit amet nibh volutpat lobortis. Phasellus gravida quis lorem eget facilisis.
                        Pellentesque rutrum a justo hendrerit consequat. Etiam nisi turpis, posuere id enim quis,
                        elementum maximus dui. Mauris placerat mollis massa, nec dapibus lorem mattis quis.
                        Pellentesque sit amet turpis risus. Fusce faucibus arcu et velit fermentum, vitae molestie
                        metus tincidunt. Suspendisse odio diam, posuere euismod lacinia in, faucibus sed massa.
                        Praesent felis leo, efficitur vitae venenatis non, faucibus a nibh. Phasellus id arcu
                        dapibus, dapibus risus vel.</p>
                </div>
                <div className={styleClass.containerElements}>
                    <p className={styleClass.subtitle2}>Selecciona tus servicios a contratar:</p>
                    <CheckBox containerStyles={styleClass.checkBoxContainers}
                              fieldName="Banca electrónica"
                              selected={contractElectronicBank}
                              onChange={(v) => setContractElectronicBank(!v)}/>
                    <CheckBox containerStyles={styleClass.checkBoxContainers}
                              fieldName="Banca por internet PYME"
                              selected={internetBank}
                              onChange={(v) => setInternetBank(!v)}/>
                    <CheckBox containerStyles={styleClass.checkBoxContainers}
                              fieldName="Cuenta empresarial"
                              selected={businessAccount}
                              onChange={(v) => setBusinessAccount(!v)}/>
                </div>
            </div>
            <div>
                <ButtonsForm onCancel={() => {
                    goHome()
                }}
                             onSave={() => {
                                 nextPage()
                             }}
                             containerStyles={styleClass.containerElements}/>
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
    subtitle: {
        fontFamily: "Inter",
        fontWeight: "bold",
        fontSize: "18px",
        lineHeight: "22px",
        fontFeatureSettings: "'zero' on",
        color: "#072146",
        marginBottom: "5px"
    },
    subtitle2: {
        fontsize: "14px",
        lineHeight: "17px",
        fontFeatureSettings: "'zero' on",
        color: "#072146",
    },
    text: {
        fontFamily: "Inter",
        marginLeft: "3px",
        fontWeight: "normal",
        fontSize: "14px",
        lineHeight: "17px",
        fontFeatureSettings: "'zero' on",
        color: "#072146",
        marginBottom: "10px"
    },
    contractDetails: {
        fontSize: "18px",
        lineHeight: "21px",
        display: "flex",
        alignItems: "center",
        color: "#7F858E",
    },
    containerElements: {
        margin: "20px 25px"
    },
    checkBoxContainers: {
        margin: "10px 0"
    }
}));
