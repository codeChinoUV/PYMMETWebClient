import {TitleRegister} from "../../common/TitleRegister";
import {Stepper} from "../../common/Stepper";
import React from "react";
import {makeStyles} from "@mui/styles";
import {IconButton} from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import CloseIcon from "@mui/icons-material/Close";
import {ButtonsForm} from "../../common/ButonsForm";
import Webcam from "react-webcam";
import {useHistory} from "react-router-dom";

export const UploadElectronicSignature = () => {
    const webcamRef = React.useRef<Webcam>(null);
    const [imgSrc, setImgSrc] = React.useState<string | null>(null);
    const styleClass = useInternalStyles();
    const history = useHistory();

    const goHome = () => {
        history.push('/start-page');
    }

    const nexPage = () => {
      history.push('/register/form/5');
    }
    
    const capture = React.useCallback(() => {
        if (webcamRef.current) {
            const imageSrc = webcamRef.current.getScreenshot();
            setImgSrc(imageSrc!);
        }
    }, [webcamRef, setImgSrc]);

    const removeImg = React.useCallback(() => {
        setImgSrc(null);
    }, [setImgSrc]);

    return (
        <div className={styleClass.screenContainer}>
            <TitleRegister/>
            <Stepper
                totalSteps={6}
                currentStep={4}
                containerStyles={styleClass.stepperContainer}
                basePathSteps="/register/form/"
            />
            <div className={styleClass.containerElements}>
                <p className={styleClass.subtitle}>Constancia de firma electrónica</p>
                <p className={styleClass.text}>
                    Este documento nos permitirá validar la firma electrónica de tu PYME.
                </p>
            </div>

            {imgSrc ? (
                <img src={imgSrc} alt="screenshot"/>
            ) : (
                <div className={styleClass.scannerContainer}>
                    <Webcam
                        audio={false}
                        ref={webcamRef}
                        screenshotFormat="image/jpeg"
                        forceScreenshotSourceSize={true}
                        height={350}
                        width={500}
                    />
                </div>
            )}

            <div className={styleClass.cameraOptionContainer}>
                <IconButton className={styleClass.hiddenOption} aria-label="gallery">
                    <InsertPhotoIcon/>
                </IconButton>
                <IconButton
                    className={styleClass.shotButton}
                    aria-label="shot"
                    size="large"
                    onClick={capture}
                >
                    <CameraAltIcon/>
                </IconButton>
                <IconButton
                    className={styleClass.cameraOption}
                    aria-label="shot"
                    onClick={removeImg}
                >
                    <CloseIcon/>
                </IconButton>
            </div>
            <div>
                <ButtonsForm onCancel={goHome} onSave={nexPage} containerStyles={styleClass.containerElements}/>
            </div>
        </div>
    );
};

const useInternalStyles = makeStyles(() => ({
    screenContainer: {
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        overflowY: "scroll",
    },
    stepperContainer: {
        margin: "15px 35px",
    },
    subtitle: {
        fontFamily: "Inter",
        fontWeight: "bold",
        fontSize: "18px",
        lineHeight: "22px",
        fontFeatureSettings: "'zero' on",
        color: "#072146",
        marginBottom: "5px",
    },
    text: {
        fontFamily: "Inter",
        marginLeft: "3px",
        fontWeight: "normal",
        fontSize: "14px",
        lineHeight: "17px",
        fontFeatureSettings: "'zero' on",
        color: "#072146",
        marginBottom: "10px",
    },
    containerElements: {
        margin: "20px 25px",
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

        marginTop: "20px",
    },
    shotButton: {
        // marginBottom: "20px !important",
        backgroundColor: "#072146 !important",
        color: "white !important",
        width: "55px !important",
        height: "55px !important",
    },
    cameraOption: {
        border: "4px solid gray !important",
        width: "45px !important",
        height: "45px !important",
        // alignSelf: "flex-end",
    },
    hiddenOption: {
        visibility: "hidden",
    },
}));
