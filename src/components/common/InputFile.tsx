import {makeStyles} from "@mui/styles";

interface IInputFileProps {
    value: string;
    onChange:  (value: string) => void;
    fieldName: string;
    TitleForScanScreen: string;
    TextForScanScreen: string;
    placeHolder?: string;
    containerStyles?: string,

}

export const InputFile = ({value, fieldName, onChange, placeHolder, containerStyles}: IInputFileProps) => {
    const styleClass = useInternalStyles();
    return (
        <div className={styleClass.inputContainer}>
            <label htmlFor=""></label>
            <input className={styleClass.input} type="text" disabled  />
            <div className={styleClass.imgButtonContainer}>
                <img src="/assets/camera.png" alt="Camera"/>
            </div>
        </div>
    )
}

const useInternalStyles = makeStyles(() => ({
    inputContainer: {
        position: "relative"
    },
    input: {
        background: "#FFFFFF",
        border: "1px solid #F0F1F2",
        boxSizing: "border-box",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius: "10px"
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
        top: 0
    },
    imgCamera:{
        height: "30px",
        width: "30px"
    }
}));
