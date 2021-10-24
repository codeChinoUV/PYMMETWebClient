import {TitleRegister} from "../../common/TitleRegister";
import {Stepper} from "../../common/Stepper";
import React from "react";
import {makeStyles} from "@mui/styles";
import {IconButton} from "@mui/material";
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import CloseIcon from '@mui/icons-material/Close';
import {ButtonsForm} from "../../common/ButonsForm";
import {useHistory} from "react-router-dom";

export const SecondFormRegister = () => {
    const styleClass = useInternalStyles();
    const history = useHistory();

    const goHome = () => {
        history.push('/start-page');
    }

    const nexPage = () => {
        history.push('/register/form/3');
    }

    return (
        <div className={styleClass.screenContainer}>
            <TitleRegister/>
            <Stepper totalSteps={6}
                     currentStep={2}
                     containerStyles={styleClass.stepperContainer}
                     basePathSteps="/register/form/"/>
            <div className={styleClass.containerElements}>
                <p className={styleClass.subtitle}>Comprobante de identificación</p>
                <p className={styleClass.text}>Este documento nos permitirá validar tu número de identificación.</p>
            </div>
            <div className={styleClass.scannerContainer}>
                <img className={styleClass.scannerImg} src="/assets/scanner.png" alt="Scan"/>
            </div>
            <div className={styleClass.cameraOptionContainer}>
                <IconButton className={styleClass.cameraOption} aria-label="gallery">
                    <InsertPhotoIcon/>
                </IconButton>
                <IconButton className={styleClass.shotButton} aria-label="shot" size="large">
                    <CameraAltIcon/>
                </IconButton>
                <IconButton className={styleClass.cameraOption} aria-label="shot">
                    <CloseIcon/>
                </IconButton>
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
    scannerContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    scannerImg: {
        height: "300px",
        width: "300px",
    },
    cameraOptionContainer: {
        display: "flex",
        justifyContent: "space-evenly",
    },
    shotButton: {
        marginBottom: "20px !important",
        backgroundColor: "#072146 !important",
        color: "white !important"
    },
    cameraOption: {
        border: "4px solid gray !important",
        width: "45px !important",
        height: "45px !important",
        alignSelf: "flex-end"
    }
}));
