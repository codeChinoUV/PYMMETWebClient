import {TitleRegister} from "../../common/TitleRegister";
import {Stepper} from "../../common/Stepper";
import {makeStyles} from "@mui/styles";
import {TextInput} from "../../common/TextInput";
import React, {useState} from "react";
import {ButtonsForm} from "../../common/ButonsForm";
import {SelectOption} from "../../common/SelectOption";
import {useHistory} from "react-router-dom";

const optionsEconomicSector = ['Prueba 1', 'Prueba 2'];
const optionsAnnualSalesRange = ['Prueba 1', 'Prueba 2'];
const optionTypesTaxPayer = ['Persona moral', 'Persona fisica'];

export const FirstFormRegister = () => {
    const styleClass = useInternalStyles();
    const history = useHistory();

    const goHome = () => {
        history.push('/start-page');
    }

    const nexPage = () => {
        history.push('/register/form/2');
    }

    const [documentId, setDocumentId] = useState('');
    const [economicSector, setEconomicSector] = useState('');
    const [rangeSales, setRangeSales] = useState('');
    const [typeTaxPayer, setTypeTaxPayer] = useState('');

    return (
        <div className={styleClass.screenContainer}>
            <div>
                <TitleRegister/>
                <Stepper totalSteps={6}
                         currentStep={1}
                         containerStyles={styleClass.stepperContainer}
                         basePathSteps="/register/form/"/>
                <div className={styleClass.containerElements}>
                    <p className={styleClass.subtitle}>Conociendo tu empresa</p>
                    <p className={styleClass.text}>Esta información nos permitirá familiarizarnos con tu empresa.</p>
                </div>
                <div>
                    <SelectOption fieldName="Sector económico"
                                  containerStyles={styleClass.containerElements}
                                  label="Sector económico"
                                  placeHolder="Selecciona un sector"
                                  onChange={(v) => setEconomicSector(v)}
                                  values={optionsEconomicSector}
                                  value={economicSector}/>
                    <SelectOption fieldName="Rango de ventas"
                                  containerStyles={styleClass.containerElements}
                                  label="Rango aproximado de ventas anuales"
                                  placeHolder="Selecciona un rango"
                                  onChange={(v) => setRangeSales(v)}
                                  values={optionsAnnualSalesRange}
                                  value={rangeSales}/>
                    <SelectOption fieldName="Tipo contribuyente"
                                  containerStyles={styleClass.containerElements}
                                  label="Tipo de contribuyente"
                                  placeHolder="Selecciona un tipo"
                                  onChange={(v) => setTypeTaxPayer(v)}
                                  values={optionTypesTaxPayer}
                                  value={typeTaxPayer}/>
                    <TextInput value={documentId}
                               containerStyles={styleClass.containerElements}
                               onChange={setDocumentId}
                               placeHolder="Ingrese el número de identificación"
                               fieldName="Numero de identificación del documento"/>
                </div>
            </div>
            <div>
                <ButtonsForm
                    onCancel={goHome} onSave={nexPage} containerStyles={styleClass.containerElements}/>
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
    buttonsContainer: {
        position: "relative",
        bottom: 0
    }
}));
