import React from 'react';
import {makeStyles} from "@mui/styles";
import {useHistory} from "react-router-dom";

const routerBaseName = process.env.PUBLIC_URL;

export const StartScreen = () => {

    const styleClasses = useInternalStyles();
    const history = useHistory();

    const welcome = () => {
        history.push('/welcome');
    }

    return (
        <div className={styleClasses.imgContainer} onClick={welcome}>
            <img className={styleClasses.logoImg} src={`${routerBaseName}/assets/LogoPYMEET.gif`} alt="Logo"/>
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
