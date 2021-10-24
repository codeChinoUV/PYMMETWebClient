import {ButtonsForm} from "../../common/ButonsForm";
import React, {useState} from "react";
import {Stepper} from "../../common/Stepper";
import {makeStyles} from "@mui/styles";
import {SelectOption} from "../../common/SelectOption";
import {TextInput} from "../../common/TextInput";

const optionsTest = ['Prueba 1', 'Prueba 2'];

export const ThirdFormRegister = () => {
    const styleClass = useInternalStyles();

    const [documentType, setDocumentType] = useState('');
    const [documentNumber, setDocumentNumber] = useState('');
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [number, setNumber] = useState('');

    return (
        <div>
            <div>
                <Stepper totalSteps={6}
                         currentStep={3}
                         containerStyles={styleClass.stepperContainer}
                         basePathSteps="/register/form/"/>
                <div className={styleClass.containerElements}>
                    <p className={styleClass.subtitle}>Datos del responsable</p>
                    <p className={styleClass.text}>Esta información nos permitira saber mas sobre el responsable de la PYME.</p>
                </div>
                <div>
                    <SelectOption fieldName="Tipo de documentp"
                                  containerStyles={styleClass.containerElements}
                                  label="Tipo de documento"
                                  placeHolder="Selecciona el tipo"
                                  onChange={(v) => setDocumentType(v)}
                                  values={optionsTest}
                                  value={documentType}/>
                    <TextInput fieldName="Número de documento"
                               containerStyles={styleClass.containerElements}
                               placeHolder="Numero de indentificación"
                               value={documentNumber}
                               onChange={(v) => setDocumentNumber(v)} />
                    <TextInput fieldName="Nombre(s)"
                               containerStyles={styleClass.containerElements}
                               placeHolder="Nombre(s)"
                               value={name}
                               onChange={(v) => setName(v)} />
                    <TextInput fieldName="Apellidos"
                               containerStyles={styleClass.containerElements}
                               placeHolder="Apellidos"
                               value={lastName}
                               onChange={(v) => setLastName(v)} /><
                    TextInput fieldName="Teléfono"
                               containerStyles={styleClass.containerElements}
                               placeHolder="Numero de teléfono"
                               value={number}
                               onChange={(v) => setNumber(v)} />
                </div>
            </div>
            <div>
                <ButtonsForm onCancel={() => {}} onSave={() => {}} containerStyles={styleClass.containerElements} />
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
