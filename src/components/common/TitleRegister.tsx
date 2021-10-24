import {makeStyles} from "@mui/styles";

export const TitleRegister = () => {
    const styleClass = useInternalStyles();

    return (<h1 className={styleClass.title}>Registro</h1>)
}

const useInternalStyles = makeStyles(() => ({
    title: {
        textAlign: "center",
        fontFamily: "Inter",
        fontWeight: "bold",
        fontSize: "28px",
        lineHeight: "44px",
        fontFeatureSettings: "zero on",
        color: "#072146",
        marginTop: "20px"
    }
}));
