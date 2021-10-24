import {makeStyles} from "@mui/styles";

const routerBaseName = process.env.PUBLIC_URL;

interface IInputFileProps {
    value: string;
    fieldName: string;
    onClickAddFile: () => void;
    placeHolder?: string;
    containerStyles?: string,
}

export const InputFile = ({value, fieldName, placeHolder, containerStyles}: IInputFileProps) => {
    const styleClass = useInternalStyles();
    return (
        <div className={containerStyles}>
            <div>
                <label className={styleClass.label} htmlFor={fieldName}>{fieldName}</label>
                <div className={styleClass.inputContainer}>
                    <input id={fieldName}
                           name={fieldName}
                           value={value}
                           placeholder={placeHolder}
                           className={styleClass.input}
                           type="text" disabled/>
                    <div className={styleClass.imgButtonContainer}>
                        <img className={styleClass.imgCamera} src={`${routerBaseName}/assets/camera.png`} alt="Camera"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

const useInternalStyles = makeStyles(() => ({
    inputContainer: {
        position: "relative"
    },
    input: {
        marginTop: "5px",
        background: "#FFFFFF",
        border: "1px solid #F0F1F2",
        boxSizing: "border-box",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius: "10px",
        fontSize: "18px",
        lineHeight: "21px",
        color: "#072146",
        padding: "16px 70px 16px 25px",
        "&:disabled": {
            color: "#072146",
        }
    },
    imgButtonContainer: {
        background: "#FFFFFF",
        border: "1px solid #F0F1F2",
        boxSizing: "border-box",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "50px",
        position: "absolute",
        right: 0,
        top: 0,
        bottom: 0
    },
    imgCamera: {
        height: "30px",
        width: "30px"
    },
    label: {
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "14px",
        lineHeight: "16px",
        color: "#072146",
        marginBottom: "10px"
    },
}));
