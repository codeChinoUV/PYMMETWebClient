import {ButtonsForm} from "../../common/ButonsForm";
import React, {useState} from "react";
import {Stepper} from "../../common/Stepper";
import {makeStyles} from "@mui/styles";
import {TextInput} from "../../common/TextInput";
import {InputFile} from "../../common/InputFile";
import {TitleRegister} from "../../common/TitleRegister";
import {useHistory} from "react-router-dom";


export const FiveFormRegister = () => {
    const styleClass = useInternalStyles();
    const history = useHistory();

    const goHome = () => {
        history.push('/start-page');
    }

    const nexPage = () => {
        history.push('/register/form/6');
    }

    const [address, setAddress] = useState('');
    const [selectDocumentAddress, setSelectedDocumentAddress] = useState('');
    const [businessName, setBusinessName] = useState('');
    const [fiscalSituation, setFiscalSituation] = useState('');
    const [electronicCompany, setElectronicCompany] = useState('');

    return (
        <div className={styleClass.screenContainer}>
            <div>
                <TitleRegister/>
                <Stepper totalSteps={6}
                         currentStep={5}
                         containerStyles={styleClass.stepperContainer}
                         basePathSteps="/register/form/"/>
                <div className={styleClass.containerElements}>
                    <p className={styleClass.subtitle}>Datos de la empresa</p>
                    <p className={styleClass.text}>Esta información nos permitirá saber más sobre la PYME.</p>
                </div>
                <div>
                    <TextInput fieldName="Domicilio"
                               containerStyles={styleClass.containerElements}
                               placeHolder="Ingrese la dirección de la PYME"
                               onChange={(v) => setAddress(v)}
                               value={address}/>
                    <InputFile value={selectDocumentAddress}
                               containerStyles={styleClass.containerElements}
                               fieldName="Comprobante de domicilio"
                               placeHolder="Seleccione el documento"
                               onClickAddFile={() => {
                               }}/>
                    <TextInput fieldName="Razón social"
                               containerStyles={styleClass.containerElements}
                               placeHolder="Ingrese el nombre de la PYME"
                               value={businessName}
                               onChange={(v) => setBusinessName(v)}/>
                    <InputFile fieldName="Constancia de situación fiscal"
                               containerStyles={styleClass.containerElements}
                               placeHolder="Seleccio el documento"
                               value={fiscalSituation}
                               onClickAddFile={() => {
                               }}/>
                    <InputFile fieldName="Constancia de firma electrónica"
                               containerStyles={styleClass.containerElements}
                               placeHolder="Seleccione el documento"
                               value={electronicCompany}
                               onClickAddFile={() => {
                               }}/>
                </div>
            </div>
            <div>
                <ButtonsForm onCancel={goHome} onSave={nexPage} containerStyles={styleClass.containerElements}/>
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
    containerElements: {
        margin: "20px 25px"
    },
}));
