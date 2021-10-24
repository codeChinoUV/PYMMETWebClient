import {makeStyles} from "@mui/styles";

interface ICheckBoxProps {
    selected: boolean;
    fieldName: string;
    onChange: (value: boolean) => void;
    containerStyles?: string;
}

export const CheckBox = ({selected, fieldName, onChange, containerStyles = ''}: ICheckBoxProps) => {
    const styleClass = useInternalStyles();
    return (
        <div className={containerStyles}>
            <label className={styleClass.label}>
                <input
                    className={styleClass.styleCheckBox}
                    name={fieldName}
                    id={fieldName}
                    type="checkbox"
                    checked={selected}
                    onChange={(e) => onChange(!e.target.checked)} />
                {fieldName}
            </label>
        </div>
    )
}

const useInternalStyles = makeStyles(() => ({
    label: {
        display: "flex",
        alignItems: "center",
        fontWeight: "bold",
        fontSize: "12px",
        lineHeight: "16px",
        color: "#072146",
    },
    styleCheckBox: {
        "-webkit-appearance": "none",
        marginRight: "5px",
        backgroundColor: "#C4C4C4",
        border: "1px solid #cacece",
        boxShadow: "0 1px 2px rgba(0,0,0,0.05), inset 0px -15px 10px -12px rgba(0,0,0,0.05)",
        padding: "9px",
        display: "inline-block",
        position: "relative",
        "&:active": {
            boxShadow: "0 1px 2px rgba(0,0,0,0.05), inset 0px 1px 3px rgba(0,0,0,0.1)",
        },
        "&:checked:active": {
            boxShadow: "0 1px 2px rgba(0,0,0,0.05), inset 0px 1px 3px rgba(0,0,0,0.1)",
        },
        "&:checked": {
            backgroundColor: "#072146",
            border: "1px solid #adb8c0",
            boxShadow: "0 1px 2px rgba(0,0,0,0.05), inset 0px -15px 10px -12px rgba(0,0,0,0.05), inset 15px 10px -12px rgba(255,255,255,0.1)",
            color: "white",
        },
        "&:checked:after": {
            content: "'\\02714'",
            fontSize: "16px",
            position: "absolute",
            top: "0px",
            left: "3px",
            color: "white"
        }
    },
}));
