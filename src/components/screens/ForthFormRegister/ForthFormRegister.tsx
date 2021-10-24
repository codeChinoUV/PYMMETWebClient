import {TitleRegister} from "../../common/TitleRegister";
import {Stepper} from "../../common/Stepper";
import React from "react";
import {makeStyles} from "@mui/styles";
import {IconButton} from "@mui/material";
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import CloseIcon from '@mui/icons-material/Close';
import {ButtonsForm} from "../../common/ButonsForm";

export const ForthFormRegister = () => {
    const styleClass = useInternalStyles();

    return (
        <div className={styleClass.screenContainer}>
            <TitleRegister />
            <Stepper totalSteps={6}
                     currentStep={4}
                     containerStyles={styleClass.stepperContainer}
                     basePathSteps="/register/form/"/>
            <div className={styleClass.containerElements}>
                <p className={styleClass.subtitle}>Agrega tu foto en tiempo real</p>
                <p className={styleClass.text}>Necesitamos saber que realmente eres tu.</p>
            </div>
            <div className={styleClass.scannerContainer}>
                <img className={styleClass.scannerImg} src="/assets/face-scanner.png" alt="Scan"/>
            </div>
            <div className={styleClass.cameraOptionContainer}>
                <IconButton className={styleClass.hiddenOption} aria-label="gallery">
                    <InsertPhotoIcon />
                </IconButton>
                <IconButton className={styleClass.shotButton} aria-label="shot" size="large">
                    <CameraAltIcon />
                </IconButton>
                <IconButton className={styleClass.cameraOption} aria-label="shot">
                    <CloseIcon />
                </IconButton>
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
    scannerContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    scannerImg: {
        height: "300px",
        width: "300px",
    },
    cameraOptionContainer:{
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
    },
    hiddenOption:{
        visibility: "hidden"
    }
}));
