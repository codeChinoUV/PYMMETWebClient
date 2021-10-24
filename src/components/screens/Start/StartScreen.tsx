import React from 'react';
import {makeStyles} from "@mui/styles";

export const StartScreen = () => {

    const styleClasses = useInternalStyles();

    return (
        <div className={styleClasses.imgContainer}>
            <img className={styleClasses.logoImg} src="/assets/LogoPYMEET.gif" alt="Logo"/>
        </div>
    )
}

const useInternalStyles = makeStyles(() => ({
    imgContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#072146"
    },
    logoImg: {
        height: "406px",
        width: "300px"
    }
}));
