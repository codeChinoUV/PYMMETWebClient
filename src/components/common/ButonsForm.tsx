import {makeStyles} from "@mui/styles";

interface IButtonsFormProps {
    onSave: () => void;
    onCancel: () => void;
    containerStyles?: string;
    isEnd?: boolean;
}

export const ButtonsForm = ({onCancel, onSave, containerStyles = '', isEnd = false}: IButtonsFormProps) => {
    const styleClass = useInternalStyles();

    return (
        <div className={containerStyles}>
            <div className={styleClass.buttonsContainer}>
                <button className={styleClass.latterButton} onClick={onCancel}>Continuar más tarde</button>
                {
                    (isEnd === true)
                        ? (<button className={styleClass.nextButton} onClick={onSave}>¡Finalizar!'</button>)
                        : (<button className={styleClass.nextButton} onClick={onSave}>Siguiente</button>)
                }
            </div>
        </div>
    )
}

const useInternalStyles = makeStyles(() => ({
    buttonsContainer: {
        display: "flex",
        justifyContent: "space-between"
    },
    nextButton: {
        marginLeft: "15px",
        background: "#072146",
        border: "2px solid #072146",
        boxSizing: "border-box",
        borderRadius: "6px",
        padding: "19px 35px",
        fontWeight: 900,
        fontSize: "14px",
        lineHeight: "16px",
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        letterSpacing: "0.04em",
        textTransform: "uppercase",
        color: "white",
        filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
    },
    latterButton: {
        background: "#DDE7F7",
        border: "2px solid #DDE7F7",
        boxSizing: "border-box",
        borderRadius: "6px",
        padding: "19px 35px",
        fontWeight: 900,
        fontSize: "11px",
        lineHeight: "13px",
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        letterSpacing: "0.04em",
        textTransform: "uppercase",
        color: "#072146",
        filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
    },
}));
