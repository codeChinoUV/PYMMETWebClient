import {makeStyles} from "@mui/styles";

export const Header = () => {
    const styleClasses = useInternalStyles();
    return (
        <div className={styleClasses.headerContainer}>
            <div className={styleClasses.header}>
                <p className={styleClasses.logIn}>Iniciar sesión</p>
            </div>
            <div className={styleClasses.headerCover}>
            </div>
        </div>

    )
}

const useInternalStyles = makeStyles(() => ({
    headerContainer:{
        position: "relative"
    },
    header:{
        background: "url('/assets/headerLogin.jpg')",
        backgroundPositionY: "bottom",
        backgroundSize: "cover",
        borderRadius: "0 0 35px 35px",
        display: "flex",
        alignItems: "flex-end",
        height: "190px",
    },
    headerCover:{
        width: "100vw",
        height: "190px",
        backgroundColor: "rgba(255,255,255,0.60)",
        position: "absolute",
        top: 0,
        borderRadius: "0 0 35px 35px"
    },
    logIn: {
        fontWeight: "bold",
        fontSize: "28px",
        lineHeight: "44px",
        fontFeatureSettings: 'zero on',
        color: "#072146",
        margin: "0 0 11px 50px",
        zIndex: 3,
    }
}));
