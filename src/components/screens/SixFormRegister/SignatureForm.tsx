import {TitleRegister} from "../../common/TitleRegister";
import {Stepper} from "../../common/Stepper";
import React, {createRef} from "react";
import {makeStyles} from "@mui/styles";
import SignatureCanvas from "react-signature-canvas";
import ClearIcon from '@mui/icons-material/Clear';
import {IconButton} from "@mui/material";
import {ButtonsForm} from "../../common/ButonsForm";
import {useHistory} from "react-router-dom";

export const SignatureForm = () => {
    const styleClass = useInternalStyles();

    const canvasRef = createRef<SignatureCanvas>();

    const history = useHistory();

    const cleanCanvas = () => {
        canvasRef.current?.clear();
    }

    const end = () => {
        history.push('/register/form/end');
    }

    return (
        <div className={styleClass.screenContainer}>
            <div>
                <TitleRegister/>
                <Stepper totalSteps={7}
                         currentStep={7}
                         containerStyles={styleClass.stepperContainer}
                         basePathSteps="/register/form/"/>
                <div className={styleClass.containerElements}>
                    <p className={styleClass.subtitle}>Firma dentro del rectángulo gris para aceptar </p>
                    <p className={styleClass.text}>Puedes poner tu dispositivo en horizontal si te es más cómodo</p>
                </div>
                <div className={styleClass.signatureContainer}>
                    <SignatureCanvas penColor='#072146'
                                     ref={canvasRef}
                                     backgroundColor="whitesmoke"
                                     canvasProps={{width: "330px", height: "400px", className: 'sigCanvas'}}/>
                    <IconButton className={styleClass.cleanOption}
                                style={{position: "absolute"}}
                                aria-label="clean"
                                onClick={cleanCanvas}>
                        <ClearIcon/>
                    </IconButton>
                </div>
            </div>
            <div>
                <ButtonsForm isEnd={true}
                             onCancel={() => {
                             }}
                             onSave={() => {
                                 end()
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
    signatureContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative"
    },
    cleanOption: {
        position: "absolute",
        top: "0 !important",
        right: "20px !important"
    }
}));
